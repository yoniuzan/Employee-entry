import React, { useState, useEffect } from "react";
import StartClock from "./StartClock";
import { f, database } from "../config/config";
import styled from "styled-components";
import Btn from "../styles/Btn";
import EditProfile from "./EditProfile";

// import Timer from './Timer';

const Profile = ({ loggedOut }) => {
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    f.auth().onAuthStateChanged(function (user) {
      try {
        fetchUserInfo(user.uid);
      } catch (err) {
        console.log("err" + err);
      }
    });
  }, []);

  const fetchUserInfo = (userId) => {
    console.log(userId);
    database
      .ref("users")
      .child(userId)
      .once("value")
      .then(function (snapshot) {
        console.log(snapshot.val());
        setFirstName(snapshot.val().firstName);
        setLastName(snapshot.val().lastName);
      });
  };

  const logout = () => {
    f.auth()
      .signOut()
      .then(
        function () {
          console.log("Signed Out");
        },
        function (error) {
          console.error("Sign Out Error", error);
        }
      );
    loggedOut();
  };

  const callBackChenges = (edit) => {
    setEdit(false);
    f.auth().onAuthStateChanged(function (user) {
      try {
        fetchUserInfo(user.uid);
      } catch (err) {
        console.log("err" + err);
      }
    });
  };

  return (
    <Box>
      {edit ? (
        <EditProfile callBackCancelOrSave={callBackChenges} />
      ) : (
        <Box>
          <NevBar>
            <stong>Hi</stong> {firstName} - {lastName}
          </NevBar>
          <StartClock />
          <br />
          <Btn onClick={() => setEdit(true)}>Edit Profile</Btn>
          <br />
          <Btn onClick={logout}>Log out</Btn>
        </Box>
      )}
    </Box>
  );
};

export default Profile;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const NevBar = styled.h3`
  font-size: 22px;
  color: white;
`;

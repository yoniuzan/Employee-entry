import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { f, database } from "../config/config";

import Btn from "../styles/Btn";

const EditProfile = ({ callBackCancelOrSave }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setID] = useState("");
  const [age, setAge] = useState("");
  const [dateOfbirth, setDateOfbirth] = useState("2020-08-19");

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
    database
      .ref("users")
      .child(userId)
      .once("value")
      .then(function (snapshot) {
        setFirstName(snapshot.val().firstName);
        setLastName(snapshot.val().lastName);
        setID(snapshot.val().id);
        setAge(snapshot.val().age);
        setDateOfbirth(snapshot.val().dateOfbirth);
      });
  };

  const handlechange = (e) => {
    setFirstName(e.target.value);
  };

  const save = () => {
    if (firstName !== "") {
      database
        .ref("users")
        .child(f.auth().currentUser.uid)
        .child("firstName")
        .set(firstName);
    }
    if (lastName !== "") {
      database
        .ref("users")
        .child(f.auth().currentUser.uid)
        .child("lastName")
        .set(lastName);
    }
    if (id !== "") {
      database.ref("users").child(f.auth().currentUser.uid).child("id").set(id);
    }
    if (age !== "") {
      database
        .ref("users")
        .child(f.auth().currentUser.uid)
        .child("age")
        .set(age);
    }
    if (dateOfbirth !== "") {
      database
        .ref("users")
        .child(f.auth().currentUser.uid)
        .child("dateOfbirth")
        .set(dateOfbirth);
    }
    alert("Your Profile is update!");
    callBackCancelOrSave();
  };

  return (
    <Box>
      <Pbox>
        <Labal>First Name</Labal>
        <InputCap
          id="txtName"
          type="text"
          name="firstName"
          placeholder="Your first name here..."
          value={firstName}
          onChange={handlechange}
        />
      </Pbox>
      <br />
      <Pbox>
        <Labal>Last Name</Labal>
        <InputCap
          id="txtLastName"
          type="text"
          name="lastName"
          placeholder="Your last name here..."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Pbox>
      <br />
      <Pbox>
        <Labal>ID</Labal>
        <InputCap
          id="txtId"
          type="number"
          name="id"
          placeholder="Your id here..."
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
      </Pbox>
      <br />
      <Pbox>
        <Labal>Date of birth</Labal>
        <InputCap
          id="txtDate"
          type="Date"
          name="dateOfbirth"
          placeholder="Your date of birth here..."
          value={dateOfbirth}
          onChange={(e) => setDateOfbirth(e.target.value)}
        />
      </Pbox>
      <br />
      <Pbox>
        <Labal> Age</Labal>
        <InputCap
          id="txtAge"
          type="number"
          name="age"
          placeholder="Your age here...."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </Pbox>
      <br />
      <Btn onClick={save}>Save</Btn>
      <br />
      <Btn onClick={() => callBackCancelOrSave()}>Cancel</Btn>
    </Box>
  );
};

export default EditProfile;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Pbox = styled.div`
  display: flax;
  justify-content: space-between;
`;
const Labal = styled.div`
  font-size: 3rem;
  font-weight: 400;
  font-family: "Yanone Kaffeesatz", sans-serif;
  text-align: center;
  color: rgb(67, 87, 107);
`;
const InputCap = styled.input`
  border-radius: 0.5rem;
  outline: none;
  border: 2px solid transparent;
  padding: 0 2rem;
  font-size: 2rem;
  transition: border 0.5s;
  margin-left: 10px;

  .cap {
    text-transform: capitalize;
    margin-left: 10px;
  }

  .input:focus {
    border: 2px aqua solid;
  }
`;

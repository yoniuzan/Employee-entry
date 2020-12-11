import React, { useState, useRef } from "react";
import TopBar from "./TopBar";
import Login from "./Login";
import { f } from "../config/config";
import Profile from "./Profile";
import styled from "styled-components";

const TimeClock = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: {}
  //   };
  // }
  const [user, setUser] = useState(null);

  useRef(() => {
    console.log("dddddddddddddddddddddd");
    f.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  // componentDidMount() {
  //   this.authListener();
  // }

  // authListener() {

  // }

  // const logOut = (user) => {
  //   setUser(user);
  // };

  return (
    <Div>
      <TopBar> TIME CLOCK</TopBar>
      {user ? <Profile /> : <Login />}
    </Div>
  );
};

export default TimeClock;

const Div = styled.div`
  background: rgb(204, 193, 186);
  padding: 3rem 7.5rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
`;

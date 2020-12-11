import React, { useState } from "react";
import { f } from "../config/config";
import SignUp from "./SignUp";
import Profile from "./Profile";
import styled from "styled-components";
import Btn from "../styles/Btn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const loginUser = (e) => {
    console.log("Email Login : " + email);
    console.log("login");
    e.preventDefault();
    f.auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        setLogin(true);
      })
      .catch((error) => {
        console.log("err");
        console.log(error);
        alert("Email Or Password is incorrect");
      });
  };

  const signUpUser = () => {
    setSignUp(true);
  };

  const callBack = () => {
    setLogin(false);
  };

  return (
    <Box>
      {login ? (
        <Profile email={email} loggedOut={callBack} />
      ) : (
        <Box>
          <Title>Employee entry</Title>
          <Pbox>
            <Labal>Email</Labal>
            <InputCap
              type="email"
              name="email"
              placeholder="Your email address here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Pbox>
          <Pbox>
            <Labal>Password</Labal>
            <InputCap
              type="password"
              name="password"
              placeholder="Your password here...."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Pbox>
          <Btn onClick={loginUser}>Login</Btn>
          <br />
          {signUp ? <SignUp /> : <Btn onClick={signUpUser}>SignUp</Btn>}
        </Box>
      )}
    </Box>
  );
};

export default Login;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  font-family: "Courier", monospace;
  text-align: center;
  color: white;
`;
const Pbox = styled.div`
  display: flexbox;
  justify-content: space-between;
`;
const Labal = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  font-family: "Yanone Kaffeesatz", sans-serif;
  text-align: center;
  color: rgb(67, 87, 107);
`;
const InputCap = styled.input`
  border-radius: 0.5rem;
  margin-top: 1.3rem;
  outline: none;
  border: 2px solid transparent;
  font-size: 2.5rem;
  transition: border 0.5s;

  .cap {
    text-transform: capitalize;
    margin-left: 10px;
  }

  .input:focus {
    border: 2px aqua solid;
  }
`;

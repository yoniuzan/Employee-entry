import React, { useState } from "react";
import { f, database } from "../config/config";
import styled from "styled-components";
import Btn from "../styles/Btn";

const SignUp = () => {
  // constructor(props) {
  //   super(props);
  //   handlechange = handlechange.bind(this);
  //   this.state = {
  //     firstName: "",
  //     lastName: "",
  //     id: "",
  //     age: "",
  //     dateOfbirth: "2020-08-19"
  //   };
  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setID] = useState("");
  const [age, setAge] = useState("");
  const [dateOfbirth, setDateOfbirth] = useState("2020-08-19");

  // const handlechange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  const signup = (e) => {
    console.log(email);
    console.log("login");
    e.preventDefault();
    f.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        database.ref("/users/" + f.auth().currentUser.uid).set({
          firstName: firstName,
          lastName: lastName,
          id: id,
          age: age,
          dateOfbirth: dateOfbirth
        });
      })
      .catch((error) => {
        console.log("err");
        console.log(error);
        alert("Email Or Password is incorrect");
      });
    //this.setState({signUp: true})
  };

  return (
    <Box>
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
      <br />
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
      <br />
      <Pbox>
        <Labal>First Name</Labal>
        <InputCap
          id="txtName"
          type="text"
          name="firstName"
          placeholder="Your first name here..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
      <Btn onClick={signup}>Sign Up</Btn>
    </Box>
  );
};

export default SignUp;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Pbox = styled.div`
  display: flax;
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
  outline: none;
  border: 2px solid transparent;
  padding: 0 2rem;
  font-size: 2rem;
  transition: border 0.5s;

  .cap {
    text-transform: capitalize;
    margin-left: 10px;
  }

  .input:focus {
    border: 2px aqua solid;
  }
`;

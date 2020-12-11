import React from "react";
import Clock from "./Clock";
import styled, { keyframes } from "styled-components";

export default ({ children }) => (
  <TopBar>
    <Logo src="icons/logo.svg" alt="logo" />
    <Title>{children}</Title>
    <Clock />
  </TopBar>
);

const TopBar = styled.div`
  background: slategray;
  width: 100%;
  height: 70px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Logo = styled.img`
  height: 5rem;
  animation: ${spin} 2s linear infinite;
`;

const Title = styled.h1`
  font-weight: bold;
  font-family: "Courier", monospace;
  color: papayawhip;
`;

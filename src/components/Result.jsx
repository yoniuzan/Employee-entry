import React from "react";
import styled from "styled-components";

const Result = ({ num, answer }) => {
  return (
    <CountTime>
      {" "}
      {num}){answer[0]} - {answer[1]}{" "}
    </CountTime>
  );
};
export default Result;

const CountTime = styled.div`
  font-size: 22px;
  color: black;
`;

import React, { useState, useEffect } from "react";
import { Switch } from "antd";
//import Report from "./Report";
import styled from "styled-components";
import Btn from "../styles/Btn";
import Result from "./Result";

import "../styles/timer.css";

const StartClock = () => {
  const [time, setTime] = useState(false);
  const [startWork, setStartWork] = useState(false);
  const [stop, setStop] = useState("still working");
  const [start, setStart] = useState(null);
  //const [endOfTheDay, setEndOfTheDay] = useState(false);
  const [once, setOnce] = useState(false);
  const [report, setReport] = useState(false);
  const [all] = useState([]);

  //Timer States
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (minutes > 58) {
          setHours((hours) => hours + 1);
          setMinutes(-1);
          setSeconds(-1);
        }
        if (seconds > 58) {
          setMinutes((minutes) => minutes + 1);
          setSeconds(-1);
        }
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hours]);

  const toggleSwitch = () => {
    ///////////////////
    setIsActive(!isActive);
    ///////////
    if (startWork === false) {
      setTime(!time);
      setStartWork(true);
      setStart(new Date().toTimeString().substring(0, 8));
      setStop("still working");
    } else {
      all.push([start, new Date().toTimeString().substring(0, 8)]);
      console.log(all);
      setTime(!time);
      setStartWork(false);
      setStop(new Date().toTimeString().substring(0, 8));
      setOnce(true);
    }
  };
  const dailyReport = () => {
    console.log("dailyReport:" + all);
    setReport(true);
  };

  return (
    <Box>
      <Title>Time Clock</Title>
      <Timer>
        {hours}h:{minutes}m:{seconds}s
      </Timer>
      <NevBar>
        {time ? "Stop work" : "Start work"}
        <CheckBoxWrapper onClick={toggleSwitch}>
          <CheckBox id="checkbox" type="checkbox" />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
        {/* <Switch className="toggle" onClick={toggleSwitch} /> */}
        {/* {endOfTheDay ? <h3> Start at {start} Stop at {stop} </h3> : null} */}
        {startWork ? (
          <CountTime>
            {" "}
            you started working today from {start} to {stop}{" "}
          </CountTime>
        ) : (
          <>
            {once ? (
              <CountTime>
                {" "}
                you started working today from {start} to {stop}{" "}
              </CountTime>
            ) : null}
          </>
        )}
      </NevBar>
      <br />
      <Btn onClick={dailyReport}>Your daily report</Btn>
      {report
        ? all.map((answer, i) => {
            console.log("Entered");
            console.log(answer);
            // Return the element. Also pass key
            return <Result key={i} num={i} answer={answer} />;
          })
        : null}
    </Box>
  );
};

export default StartClock;

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
const NevBar = styled.div`
  font-size: 22px;
  color: white;
  display: flex;
  justify-content: space-between;
`;
const CountTime = styled.h3`
  font-size: 22px;
  color: black;
`;

const Timer = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-family: "Courier", monospace;
  text-align: center;
  color: white;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: lightblue;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

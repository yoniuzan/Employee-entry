import React, { useState } from "react";
import styled from "styled-components";

const Clock = () => {
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date] = useState(new Date().toLocaleDateString());

  // useEffect(() => {
  //   setInterval(() =>
  //     setTime(new Date().toLocaleTimeString()),
  //     1000
  //   );
  // }, [])

  return <Time>{date}</Time>;
};
export default Clock;

const Time = styled.div`
  right: 150px;
  font-family: courier, monospace;
  color: papayawhip;
  font-size: 30px;
  font-weight: bold;
`;

import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";

import "./global-styles.css";
import TimeClock from "./components/TimeClock";

const rootElement = document.getElementById("root");
ReactDOM.render(<TimeClock />, rootElement);

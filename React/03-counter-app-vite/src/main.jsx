import React from "react";
import ReactDOM from "react-dom/client";
// Style
import "./main.css";
// App
import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);

import React from "react";
import logo from "./star.png";
import lt from "./lt.png";

function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={lt} className="lt"></img>
        <p>
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          라코타코와 함께하는 가상회의 플랫폼
          <br />
          BOOM!
        </p>
      </header>
    </div>
  );
}

export default Loading;

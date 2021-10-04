import React from "react";
import logo from "../../assets/img/boom.png";
import { Link } from "react-router-dom";

function MyDID() {
  return (
    <div>
      <div id="gotohome">
        <Link to="/">
          <img src={logo} alt="로고" width="160px" height="90px" />
        </Link>
        <h1>My DID</h1>
      </div>
    </div>
  );
}

export default MyDID;

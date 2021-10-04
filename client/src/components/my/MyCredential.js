import React from "react";
import logo from "../../assets/img/boom.png";
import { Link } from "react-router-dom";
function MyCredential() {
  return (
    <div>
      <div id="gotohome">
        <Link to="/">
          <img src={logo} alt="로고" width="160px" height="90px" />
        </Link>
        <h1>My Credential</h1>
      </div>
      <hr />
      <br />
      <br />
      <div id="info">
        <div>
          <h4>이름</h4>
          <h4>이메일</h4>
          <h4>비밀번호</h4>
        </div>
        <div>
          <input type="text" />
          <br />
          <input type="text" />
          <br />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default MyCredential;

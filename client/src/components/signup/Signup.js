import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import logo from "../../assets/img/boom.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Signup({ history }) {
  const [signName, setSignName] = useState("");
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [signPasswordCon, setSignPasswordCon] = useState("");

  const onSignNameHandler = (event) => {
    setSignName(event.currentTarget.value);
  };

  const onSignEmailHandler = (event) => {
    setSignEmail(event.currentTarget.value);
  };

  useEffect(() => {
    const p = document.getElementById("notEmail");
    const allitems = document.getElementById("allitems");
    if (signEmail === "") {
      p.style.display = "none";
      allitems.style.height = "470px";
    } else {
      if (signEmail.indexOf("@") === -1) {
        p.style.display = "block";
        p.style.color = "red";
        p.style.fontSize = "12px";
        p.style.marginTop = "0";
        allitems.style.height = "500px";
      } else {
        p.style.display = "none";
        allitems.style.height = "470px";
      }
    }
  }, [signEmail]);

  const onSignPasswordHandler = (event) => {
    setSignPassword(event.currentTarget.value);
  };

  const onSignPasswordConHandler = (event) => {
    setSignPasswordCon(event.currentTarget.value);
  };

  useEffect(() => {
    const p = document.getElementById("notPWCon");
    const allitems = document.getElementById("allitems");
    const signPassword = document.getElementById("signPassword").value;
    if (signPasswordCon === "") {
      p.style.display = "none";
      allitems.style.height = "470px";
    } else {
      if (signPasswordCon !== signPassword) {
        p.style.display = "block";
        p.style.color = "red";
        p.style.fontSize = "12px";
        p.style.marginTop = "0";
        allitems.style.height = "500px";
      } else {
        p.style.display = "none";
        allitems.style.height = "470px";
      }
    }
  }, [signPasswordCon]);

  const onSignSubmitHandler = (event) => {
    event.preventDefault();
    Post(signName, signEmail, signPassword, signPasswordCon);
  };

  const Post = async (name, email, pw, pwC) => {
    if (name === "" || email === "" || pw === "" || pwC === "") {
      alert("?????? ????????? ??????????????????.");
    } else if (email.indexOf("@") === -1) {
      alert("????????? ????????? ??????????????????.");
    } else if (pw !== pwC) {
      alert("??????????????? ????????????.");
    } else {
      await axios
        .post(`http://127.0.0.1:3001/signup`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          name: name,
          email: email,
          pw: pw,
        })
        .then((res) => {
          //???????????? ??????
          if (res.data.message === true) {
            alert("?????? ??????! DID????????? ???????????????.");
            // axios.get(`http://3.37.192.173/writedid`);
            // console.log("did??????");
            history.push("/");
          }
          //???????????? ??????
          else if (res.data.message === "dup") {
            alert("?????? ????????? ??????????????????.");
          }
        })
        .catch((error) => {
          console.log("??????????????? ?????? : " + error);
        });
    }
  };

  const classes = useStyles();

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="??????" width="160px" height="90px" />
      </div>
      <div className="allitems" id="allitems">
        <div>
          <br />
          <br />
          <input
            type="text"
            id="signName"
            className="nomargin"
            onChange={onSignNameHandler}
            placeholder="??????"
          />
          <input
            type="text"
            id="signEmail"
            className="nomargin"
            onChange={onSignEmailHandler}
            placeholder="?????????"
          />{" "}
          <br />
          <p id="notEmail">????????? ???????????? ???????????????!</p>
          <input
            type="password"
            id="signPassword"
            className="nomargin"
            onChange={onSignPasswordHandler}
            placeholder="????????????"
          />{" "}
          <br />
          <input
            type="password"
            className="nomargin"
            onChange={onSignPasswordConHandler}
            placeholder="???????????? ??????"
          />{" "}
          <br />
          <p id="notPWCon">??????????????? ?????? ??????????????????!</p>
        </div>
        <div className="birthday">
          <div className="birthdayTitle">
            <p>??????</p>
          </div>
          <div className="birthdayCon">
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
        </div>
        <Link to="/">
          <br />
          <input
            type="button"
            className="sign_but nomargin"
            onClick={onSignSubmitHandler}
            value="????????????"
          />
        </Link>
      </div>
    </div>
  );
}

export default Signup;

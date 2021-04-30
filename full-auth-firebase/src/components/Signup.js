import React, { useRef } from "react";
import "./Signup.css";
import iconFb from "../images/iconFb.png";
function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="signupContainer">
      <div className="loginContainer">
        <img
          className="logo-instagram"
          src="https://i.imgur.com/zqpwkLQ.png"
          alt="img"
        />
        <input
          className="input-signup"
          placeholder="Phone number, username,"
          type="email"
          ref={emailRef}
        />
        <input
          className="input-signup"
          placeholder="Password"
          type="password"
          ref={passwordRef}
        />
        <div className="btn-login">Log In</div>
        <div className="or-login-fb">
          <div className="line-login">______________</div>
          <div className="or-login"> OR</div>
          <div className="line-login">______________</div>
        </div>
        <div className="login-fb">
          <img
            className="img"
            src={iconFb}
            width="16px"
            height="16px"
            alt="img"
          />
          <div className="login-fb-txt">Log in with Facebook</div>
        </div>
        <div className="forgot-login">Forgot password?</div>
      </div>
      <div className="signupContainer">
        <div className="signupTxt">
          <div className="tt">
            Don't have an account?<span className="signup-span"> Sign up</span>
          </div>
        </div>
        <div className="get-app-container">
          <div className="get-app-txt">Get the app.</div>
          <div className="get-app-icons">
            <img
              className="get-app-icon"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              width="136px"
              height="40px"
              alt="img"
            />
            <img
              className="get-app-icon"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              width="134.28px"
              height="40px"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

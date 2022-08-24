import React from "react";
import "../styles/signIn.css";
import googleLogo from "../images/google.png";
import signinupSvg from "../images/signinupSvg.svg";

import {Link} from "react-router-dom";
 
const SignIn = () => {
  return (
    <div className="signin">
        <div className="svg">
            <img src={signinupSvg} alt="" />
        </div>
      <div className="greenbox">
        <h1>Sign In</h1>
        <p className="para1">Enter Address</p>
        <input
          className="col-75"
          name="firstname"
          placeholder="Enter your email"
        />

        <p className="para2">Set Password</p>
        <input
          className="col-75"
          name="password"
          id="password"
          type="password"
          placeholder="Enter Password"
        />

        <input className="enterpassword" type="checkbox" id="password_value" />
        <div className="password"> Show Password </div>
        <br />
        <button className="sign-in"> Sign In </button>
        <Link to="/">
          <h3 style={{fontSize: "12px",fontWeight:"500"}}>Forgotten password?</h3>
          </Link>
        <div className="lines">
          <div className="line1"></div>
          <p>or</p>
          <div className="line2"></div>
        </div>

        <a className="box-2">
          <img src={googleLogo} />
          <h3>Continue with Google</h3>
        </a>
        <Link className="dontacc" to="/signup">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;

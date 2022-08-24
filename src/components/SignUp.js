import React from "react";
import googleLogo from "../images/google.png";
import { Link } from "react-router-dom";
import signinupSvg from "../images/signinupSvg.svg";

const SignUp = () => {
  return (
    <div>
      <div className="signin">
        <div className="svg">
          <img src={signinupSvg} alt="" />
        </div>
        <div className="greenbox">
          <h1>Register</h1>
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

          <input
            className="enterpassword"
            type="checkbox"
            id="password_value"
          />
          <div className="password"> Show Password </div>
          <br />
          <button className="sign-in">Register</button>

          <div className="lines">
            <div className="line1"></div>
            <p>or</p>
            <div className="line2"></div>
          </div>

          <a className="box-2">
            <img src={googleLogo} />
            <h3>Continue with Google</h3>
          </a>
          <Link className="dontacc" to="/signin">
            Already have an account? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import projectLogo from "../images/logoProject.svg";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img src={projectLogo} alt="" />
      <ul className="nav1">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/signup">Sign up</Link>
      </ul>
      <ul className="phoneMenu">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/">Register</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

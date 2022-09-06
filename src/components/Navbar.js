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
        <Link to="/signup">Register</Link>
      </ul>
      <ul className="phoneMenu">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/signup">Register</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

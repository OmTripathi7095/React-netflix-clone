import React from "react";
import "./css/nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <img className="logo" src="src/assets/netflix.svg" alt="Logo" />
      <button className="btn">Sign in</button>
    </div>
  );
};

export default Nav;

import React from "react";
import SignUp from "./signup";
import Login from "./login";
import Background from "./background.png";
import { Link } from "react-router-dom";

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")",
};

export default function Homepage() {
  return (
    <div style={sectionStyle}>
      <h1>Welcome to To-Do-List</h1>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

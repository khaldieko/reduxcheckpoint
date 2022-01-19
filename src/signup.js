import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./Redux/Actions/SignUpAction";
import { Link } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function getUsername(e) {
    setusername(e.target.value);
  }
  function getPassword(e) {
    setpassword(e.target.value);
  }
  const {
    SignUp: { isAuthenticated },
  } = useSelector((state) => state);
  async function handleSubmit(e) {
    e.preventDefault();

    dispatch(register(username, password));
    if (isAuthenticated) {
      navigate("/login");
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            required
            onChange={getUsername}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            required
            onChange={getPassword}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">log in?</Link>
        </p>
      </form>
    </div>
  );
}

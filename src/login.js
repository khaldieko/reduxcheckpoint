import React from "react";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { login } from "./Redux/Actions/loginAction";
import {useNavigate} from "react-router-dom"
import "./signup.css";


function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { SignUp:{isAuthenticated} } = useSelector((state) => state)
    function getUsername(e) {
        setusername(e.target.value)
    }
    function getPaswword(e) {
        setpassword(e.target.value)
    }
    async function handleSubmit(e) {
      e.preventDefault();
  
      dispatch(login(username, password));
      console.log(isAuthenticated);
      if (isAuthenticated) {
          navigate("/home")
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Log in</h3>

        <div className="form-group">
          <label>Username</label>
          <input
          onChange={getUsername}
            type="text"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
          onChange={getPaswword}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
}

export default Login;

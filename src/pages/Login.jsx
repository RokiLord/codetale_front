import React, { Fragment } from 'react';
import "./Login.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { useCookies } from 'react-cookie';



function Login(props) {


  const [cookies, setCookie] = useCookies(['user_id']);
  const [pwd, setPwd] = useState("");
  const [id, setId] = useState("");
  const navigate  = useNavigate();



  const handleCookie = () => {
    setCookie('id', id, { path: '/' });
    setCookie('Password', pwd, { path: '/' });
 };




  const moveToRegisterPage = () => {
    navigate("/register");
  }

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      user_id: "user1",
      password: "pass1",
    },
    {
      user_id: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid user id",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.user_id === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        console.log(userData);
      }
    } else {
      // user_id not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }

    handleCookie();
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="login_error">{errorMessages.message}</div>
    );

  // -----------------------------------------------------------------
  // JSX code for login form
  const renderForm = (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <div className="login_input-container">
          <label>user_id </label>
          <input type="text" name="uname" value={id}  onChange={(e) => setId(e.target.value)} required />
          {renderErrorMessage("uname")}
        </div>
        <div className="login_input-container">
          <label>Password </label>
          <input type="password" name="pass" value={pwd} onChange={(e) => setPwd(e.target.value)} required />
          {renderErrorMessage("pass")}
        </div>
        <div className="login_button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <Fragment>
    <Navbar/>
    <div className="login_app">
      <div className="login-form">
        <div className="login_title">Sign In</div>


        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <p>Are not Registered?</p>
      <button onClick={moveToRegisterPage}>Sign up</button>
    </div>
    </Fragment>
  );
}


export default Login;

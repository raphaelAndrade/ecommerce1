//This component is for the login page of our website
import React, { useState } from "react";
import "./LogIn.css";
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import FadeIn from 'react-fade-in';

const LogIn = () => {
  //state hook
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [authFlag, setAuthFlag] = useState(false);

  //methods
  const logIn = (e) => {
    e.preventDefault();

    //check if the user info is correct
    let storedUser = JSON.parse(localStorage.getItem("user"));

    //if "user" key doesn't exist
    if (!localStorage.hasOwnProperty("user")) {
      setError("Account doesn't exist. No user key");
    } else {
      //if user info doesn't match
      let matchedUser = storedUser.find(elem => {
        return (elem.name === user.name) && (elem.email === user.email) && (elem.password === user.password);
      });
      if (matchedUser === undefined) {
        setError("Account doesn't exist.");
      } else {
        setAuthFlag(true);
      }
    }
  };

  const logOut = () => {
    setUser({
      name: "",
      email: "",
      password: ""
    });
    setAuthFlag(false);
  };

  return (
    <>
      <FadeIn>
        <div className="loginContainer">
          {(authFlag) ? (
            //when the login is successfull
            <>
              <FadeIn>
                <h2 className="welcome">Welcome, <span>{user.name} </span>! Have a good shopping :)</h2>
                <div className="row btnDiv">
                  <Button type="button" onClick={logOut} className="col logOutBtn">Log Out</Button>
                  {/* Route to home page */}
                  <Link
                    to={{
                      pathname: "/home",
                      state: {
                        userName: user.name
                      }
                    }}
                    className="col goToHomeBtn">
                    Go to store
                  </Link>
                </div>
              </FadeIn>
            </>) : (
            // Show Form
            <Form onSubmit={logIn} className="logInForm">
              <h2>Login</h2>
              {(error !== "") ? (
                //Validation check:when there is an error logging in 
                <>
                  <p className="errorMsg">{error}</p>
                </>
              ) : ""}
              <Form.Group controlId="formGroupName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your name"
                  onChange={e => setUser({ ...user, name: e.target.value })}
                  value={user.name}
                  onFocus={() => { setError(""); setUser({ name: "", email: "", password: "" }); }} />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  onChange={e => setUser({ ...user, email: e.target.value })}
                  value={user.email}
                  onFocus={() => { setError(""); }} />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  onChange={e => setUser({ ...user, password: e.target.value })}
                  value={user.password}
                  onFocus={() => { setError(""); }} />
              </Form.Group>
              <Button variant="primary" type="submit" className="submitBtn">Log in</Button>
              <Link
                to="/account"
                className="newAccount">
                <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight> Haven't had an account? Create one!</Link>
            </Form>
          )}

        </div>
      </FadeIn>
    </>
  );
};

export default LogIn;

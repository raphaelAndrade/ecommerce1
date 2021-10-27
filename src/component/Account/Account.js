import React, { useState } from "react";
import "./Account.css";
import { Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const Account = () => {

  const [newAccount, setNewAccount] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  //store a new account info in to LocalStorage
  const createAccount = (e) => {
    e.preventDefault();
    //input validation check
    if ((newAccount.name === "") || (newAccount.email === "") || (newAccount.password === "")) {
      setError("Please enter name, email and password");
    } else {
      //create a new account
      if (!localStorage.hasOwnProperty("user")) {
        //no account is stored
        localStorage.setItem("user", JSON.stringify([newAccount]));
      } else {
        //check if the same accounta already exist
        let user = JSON.parse(localStorage.getItem("user"));
        //pattern 1 : name and email match
        let nameEmailMatch = user.find(elem => {
          return (elem.name === newAccount.name) && (elem.email === newAccount.email);
        });
        //pattern 2 : email match
        let emailMatch = user.find(elem => elem.email === newAccount.email);

        if (nameEmailMatch === undefined) {
          if (emailMatch === undefined) {
            user.push(newAccount);
            localStorage.setItem("user", JSON.stringify(user));
            setSuccess(true);
          } else {
            setError("You already have an account with us.");
          }
        } else {
          setError("You already have an account with us.");
        }
      }
    }
  };

  return (
    <>
      <FadeIn>
        <div className="newAccountContainer">
          {/* Account Creation Success  */}
          {(success) ? (
            <>
              <FadeIn>
                <h2 className="success">Thank you, <span>{newAccount.name} </span>!<br></br>Your account is successfully created. <br></br>Have a good shopping :)</h2>
                {/* Route to home page */}
                <Link
                  to={"/home"}
                  className="col goToHomeBtn">
                  go to store
                </Link>
              </FadeIn>
            </>
          ) : (
            <>
              {/* Account Creation Form  */}
              <Form className="accountForm" onSubmit={createAccount}>
                <h2>Create Account</h2>
                {/* Validation check: when one of input is empty */}
                {(error !== "") ? (
                  <>
                    <p className="errorMsg">{error}</p>
                  </>
                ) : ""}
                <Form.Group controlId="formGroupName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name"
                    onChange={e => setNewAccount({ ...newAccount, name: e.target.value })}
                    value={newAccount.name}
                    onFocus={() => { setError(""); setNewAccount({ name: "", email: "", password: "" }); }} />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"
                    onChange={e => setNewAccount({ ...newAccount, email: e.target.value })}
                    value={newAccount.email}
                    onFocus={() => { setError(""); }} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"
                    onChange={e => setNewAccount({ ...newAccount, password: e.target.value })}
                    value={newAccount.password}
                    onFocus={() => { setError(""); }} />
                </Form.Group>
                <Row className="btnRow">
                  <Button variant="primary" type="submit" className="col createBtn">Create</Button>
                  {/* Route to home page */}
                  <Link
                    to={"/home"}
                    className="col goToHomeBtn">
                    Return to store
                </Link>
                </Row>
              </Form>
            </>
          )}
        </div>
      </FadeIn>
    </>
  );
};

export default Account;

import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import app from "../../../base";
import "./LogInForm.scss";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
        <p className="black-font">Already signed up?</p>
        <Link to="/login">Log in</Link>
      </form>
    </div>
  );
};

export default withRouter(SignUp);

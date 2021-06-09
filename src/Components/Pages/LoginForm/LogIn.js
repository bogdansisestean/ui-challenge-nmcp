import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"

import app from "../../../base";
import { AuthContext } from "../../../Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
        <p className="black-font">Not logged in?</p>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};
export default withRouter(Login);

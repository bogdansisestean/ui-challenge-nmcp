import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import SignUp from "./Components/Pages/LoginForm/SignUp";
import { AuthProvider } from "./Auth";
import LogIn from "./Components/Pages/LoginForm/LogIn";
import PrivateRoute from "./PrivateRoute";
require("dotenv").config();

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="main-content">
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

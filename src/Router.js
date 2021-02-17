import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Container/Home";
import Profile from "./Container/Profile";
import Login from "./Container/Login";
import AuthRoute from "./AuthRoute";


function Routes(props) {
  const [auth, setAuth] = useState(true);
  return (
    <Router>
      <Switch>
      <Route path="/" render={(props) => <AuthRoute {...props} />} />
      {/* <Route path="/home" render={(props) => <Home {...props} />} />
      <Route path="/profile" render={(props) => <Profile {...props} />} /> */}
      </Switch>
    </Router>
  );
}
export default Routes;
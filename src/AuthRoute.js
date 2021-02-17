import React, {useState} from 'react';
import Home from './Container/Home';
import Navbar from './Container/Navbar';
import { Route } from 'react-router-dom';
import Profile from './Container/Profile';
import Login from './Container/Login';


const AuthRoutes = (props) => {
    console.log("props ->", props.location.pathname)
  return (
    <div className="contentBox">
     <Navbar props={props} />
        <Route path="/" exact render={(props) => <Login {...props} />} />
        <Route path="/home" exact render={(props) => <Home {...props} />} />
        <Route path="/profile" exact render={(props) => <Profile {...props} />} />
    </div>
  );
}
export default AuthRoutes;
import React, { useState } from "react";
import "./main.css";

function Navbar(props) {
    console.log(props);
    let goto=(value)=>{
        props.props.history.push(value);
    }

    return (
     <div className="navContainer">

       {/* Left box for logo */}
        <div className="left">
          <div>PCApp</div>
        </div>

         {/* Right box for Navbar */}
        <div className="right">
        <ul className="navbar">
        <li onClick={()=>{goto("home")}}>Home</li>
         <li onClick={()=>{goto("profile")}}>Profile</li>
         <li onClick={()=>{goto("/")}}>Login</li>
        </ul>
        </div>
     </div>
    );
  }

  
export default Navbar;

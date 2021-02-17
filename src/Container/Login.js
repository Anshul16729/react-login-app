import React, { useState } from "react";
import Navbar from '../Container/Navbar';

function Login(props) {
    return (
     <div className="login">
      
         <div className="login_form">
         <h1>Login Form</h1>
           <form>
           <span>Username <i class="fas fa-user"></i> </span> <br/><input type="text" placeholder="Enter Username"/>
           <br/>
           <br/>
           <span>Password <i class="fas fa-key"></i></span> <br/><input type="password" placeholder="Enter Password"/>          
           <div className="forgot">Forgot Password?</div>
           <button>LOGIN</button>
           </form>
         </div>
     </div>
    );
  }

  
export default Login;
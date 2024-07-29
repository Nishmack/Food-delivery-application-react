import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-pop-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        {/* Add form fields for Sign Up / Login here */}
        <div className="login-popup-inputs">
          {/* when login hide yourname box */}
          {currState==="Login"?<></>: <input type="text" placeholder='Your name' required />}
         
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continueing,i agree to the terms of use & privacy policy</p>

        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :
        <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>

        }
        
       

      </form>
    </div>
  );
};

export default LoginPopUp;


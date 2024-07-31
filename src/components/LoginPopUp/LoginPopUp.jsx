import React, { useState } from 'react'; //imports React and the useState hook, which is used for managing the component's state.
import './LoginPopUp.css'; // imports the CSS file for the LoginPopUp component
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => { //LoginPopUp component. It takes setShowLogin as a prop, which is a function to set the visibility of the login popup.
  const [currState, setCurrState] = useState("Login");//declares a state variable currState with its setter setCurrState, initialized to "Login". It is used to track whether the form is in "Login" or "Sign Up" mode.

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-pop-title">
          <h2>{currState}</h2>
          {/* Clicking the img element sets setShowLogin to false, closing the popup. */}
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />  
        </div>
        {/* Add form fields for Sign Up / Login here */}
        <div className="login-popup-inputs">
          {/* when login hide yourname box.this is signup from. name input field. It is displayed only when currState is "Sign Up". */}
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


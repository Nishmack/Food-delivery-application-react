import React, { useContext, useState } from 'react'; //imports React and two hooks, useContext and useState, which are used for state management and accessing context in functional components.
import './Navbar.css' //import css // imports the CSS file for the Navbar component,
import { assets } from '../../assets/assets' // imports an object named assets from a specific path. This object likely contains paths to various image assets used in the component.
import {Link} from 'react-router-dom'; // imports the Link component from react-router-dom, which is used for navigation between different routes in the application.

import { StoreContext } from '../../context/StoreContext'; //imports the StoreContext from a specified path, which will be used to access the context values in the component.

const Navbar = ({setShowLogin}) => { //defines the Navbar component. It takes setShowLogin as a prop, which is a function to set the login
  const[menu,setMenu] = useState("menu") //underline in navbar when touch.declares a state variable menu with its setter setMenu, initialized to "menu". It is used to track the active menu item.
  // order icon number change in navbar
  const {getTotalCartAmount} = useContext(StoreContext);//accesses the getTotalCartAmount function from the StoreContext using useContext.
  // Return the JSX structure
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link> 
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}>
           
          </div>
         
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar

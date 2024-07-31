import React, { useState } from 'react'
// Imports the Navbar, Routes, Route, Home, Cart, PlaceOrder, Footer, and LoginPopUp components.
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  // App component and initializes the showLogin state with a default value of false.
  return (
   <>
   {/* if showLogin is true and conditionally renders the LoginPopUp component if it is. */}
      {showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    
    </div>
    <Footer /> 
   </>
      //div container with a class name of app contains the Navbar, Routes, and Footer components. 
      // Navbar receives the setShowLogin function as a prop to control the visibility of the LoginPopUp.
      // '/' maps to the Home component.
      // '/cart' maps to the Cart component.
      // '/order' maps to the PlaceOrder component.
      // Footer is placed outside the main div but still within the fragment to ensure it's always rendered.
  )
}

export default App

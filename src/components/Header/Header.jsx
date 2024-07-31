import React from 'react' //imports React, which is necessary for creating React components.
import './Header.css'
import { HashLink } from 'react-router-hash-link';// imports the HashLink component from the react-router-hash-link library, which allows for smooth scrolling to anchor links within the application.

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Explore a world of culinary delights with our Food Delivery App. Whether you're craving a gourmet meal from your favorite restaurant or a quick bite from a nearby cafe, we've got you covered. Our app brings you a wide range of cuisines and dishes, all available at your fingertips.</p>
        <HashLink to='#explore-menu'>
        <button>View Menu</button>
        </HashLink>
      </div>
      
    </div>
  )
}

export default Header

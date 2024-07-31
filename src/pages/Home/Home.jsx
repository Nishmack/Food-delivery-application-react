import React, { useState } from 'react'
import './Home.css'
//  import the Header, ExploreMenu, FoodDisplay, and AppDownload components, which are used within the Home component.
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  // defines a state variable category initialized as "All" and a function setcategory to update it.
  // create state [name,function]
  const [category,setcategory] = useState("All");
  return (
    <div>
      {/* Header component, which displays the header section of the home page. */}
      <Header /> 
      {/* ExploreMenu component, passing the category state and the setcategory function as props. This component allows the user to select a food category */}
      <ExploreMenu category={category} setcategory={setcategory} />
      {/* FoodDisplay component, passing the category state as a prop. This component displays the list of food items based on the selected category. */}
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home
//  exports the Home component as the default export from the module.

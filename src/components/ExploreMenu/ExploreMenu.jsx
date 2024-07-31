import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
//ExploreMenu component. It takes two props: category, the current category selected, and setcategory, a function to set the category.
const ExploreMenu = ({category,setcategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Our mission is to satisfy every palate by offering a variety of cuisines and making it simple to find exactly what you're craving—Bon appétit!

</p>
      <div className="explore-menu-list">
        {/* This block maps through the menu_list array and returns a div for each item. */}
        {menu_list.map((item,index)=>{
          return(
            // This line defines a div for each menu item with an onClick handler that toggles the category. If the current category is the same as the item's name, it sets the category to "All"; otherwise, it sets it to the item's name. The key prop is set to index.
            <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              {/* define an img element displaying the menu item's image and a p element displaying the menu item's name. The img element has a conditional className that adds the "active" class if the current category matches the item's name. */}
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />


              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
      
    </div>
  )
}

export default ExploreMenu

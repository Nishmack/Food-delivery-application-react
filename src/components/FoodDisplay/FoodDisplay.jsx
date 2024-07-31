// imports React and the useContext hook from React
import React, { useContext } from 'react'; 
import './FoodDisplay.css'
// StoreContext context from the StoreContext module, which provides access to the global store
import { StoreContext } from '../../context/StoreContext'
// imports the FoodItem component, which is used to display individual food items.
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
  // useContext hook to access the food_list from StoreContext.
  const {food_list} = useContext(StoreContext)
  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
       
{/* maps through the food_list array and returns a FoodItem component for each item that matches the current category.
 */}
         {food_list.map((item,index)=>{

          //  conditionally renders a FoodItem component if the category is "All" or matches the item's category. The FoodItem component is passed several props, including key, id, name, description, price, and image
            if(category==="All" || category===item.category){
              
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}  />

            }
            

           
          })}
        </div>
      </div>
      
    </div>
  )
}

export default FoodDisplay

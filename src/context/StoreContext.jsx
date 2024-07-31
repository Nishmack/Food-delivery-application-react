// when user click on each category disply items .store conttext provider is an api
// import the necessary functions from React and the food_list data from the assets.
import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/assets';


// creates a new context called StoreContext.
export const StoreContext = createContext(null)


//StoreContextProvider component, which takes props as an argument.
const StoreContextProvider = (props)=>{

  // defines a state variable cartItems initialized as an empty object and a function setCartItem to update it.
  const [cartItems,setCartItem] = useState({})
  // function adds an item to the cart. If the item is not already in the cart, it sets the quantity to 1. If the item is already in the cart, it increments the quantity by 1.
  // add tocart.new entry fr food product if product not available in cart.if product already available increase val by 1.
  const addToCart = (itemId)=>{
    if(!cartItems[itemId]){
      setCartItem((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  // Remove item from cart.decrease val by 1
  const removeFromCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

//This function calculates the total amount in the cart by iterating over cartItems,
//  finding the price of each item, and summing up the total cost.
const getTotalCartAmount=()=>{
  let totalAmount = 0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      let itemInfo = food_list.find((product)=>product._id === item)
      totalAmount += itemInfo.price* cartItems[item];
  

    }
  
  }
  return totalAmount;
 
}


  const contextValue = {
    food_list,
    cartItems,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount


  }
  return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}
 export default StoreContextProvider;
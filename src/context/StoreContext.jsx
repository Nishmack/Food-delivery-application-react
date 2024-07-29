// when user click on each category disply items .store conttext provider is an api
import { createContext, useEffect, useState } from "react";
import {food_list} from '../assets/assets';

export const StoreContext = createContext(null)
const StoreContextProvider = (props)=>{
  const [cartItems,setCartItem] = useState({})
  // add tocart.new entry fr food product if product not available in cart.if product already available increase val by 1.
  const addToCart = (itemId)=>{
    if(!cartItems[itemId]){
      setCartItem((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  // Remove from cart.decrease val by 1
  const removeFromCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }


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
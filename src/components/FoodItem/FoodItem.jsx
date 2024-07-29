import React, { useContext} from 'react';
import './FoodItem.css'; // Corrected the file path and extension
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    // add cart button +.all product cart initialised with 0
   
    //access for cart item ,add to cart ,remove from cart
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!cartItems[id]
             ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' />
             :<div className='food-item-counter'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)}  src={assets.add_icon_green} alt="" />


             </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" /> {/* Assuming assets.rating_stars is the correct reference */}
        </div>
        <p className="food-item-desc">{description}</p>
        <p className='food-item-price'>₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

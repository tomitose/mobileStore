import React, { useContext } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Cart.css"
import { CartContext } from '../Context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  
  return (
    <div className="cart-container">
      {cart.length === 0 ? (<ShoppingCartOutlinedIcon/>):(
        <div className="cart-detail">
          <ShoppingCartOutlinedIcon/>
          <p>{cart.length}</p>
        </div>
      )}
    </div>
  )
}

export default Cart
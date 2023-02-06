import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Cart.css"

const Cart = () => {

  return (
    <div className="cart-container">
      {localStorage.length === 0 ? (<ShoppingCartOutlinedIcon/>):(
        <div className="cart-detail">
          <ShoppingCartOutlinedIcon/>
        </div>
      )}
    </div>
  )
}

export default Cart
import React, { useContext, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Cart.css";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const storedCartCount = JSON.parse(localStorage.getItem("count"));
    if (storedCartCount) {
      setCart(Array(storedCartCount).fill({}));
    }
  }, [setCart]);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <ShoppingCartOutlinedIcon />
      ) : (
        <div className="cart-detail">
          <ShoppingCartOutlinedIcon />
          <p className="cart-amount">{cart.length}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

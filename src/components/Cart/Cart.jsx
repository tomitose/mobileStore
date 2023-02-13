// import React, { useContext, useEffect } from "react";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import "./Cart.css";
// import { CartContext } from "../Context/CartContext";

// const Cart = () => {
//   const { cart, setCart } = useContext(CartContext);

//   useEffect(() => {
//     const storedCartCount = JSON.parse(localStorage.getItem("count"));
//     if (storedCartCount) {
//       setCart(Array(storedCartCount).fill({}));

//       const timeoutId = setTimeout(() => {
//         localStorage.clear();
//         setCart([]);
//       }, 300000); // 5 minutos en milisegundos

//       return () => clearTimeout(timeoutId);
//     }
//   }, [setCart]);

//   return (
//     <div className="cart-container">
//       {cart.length === 0 ? (
//         <ShoppingCartOutlinedIcon />
//       ) : (
//         <div className="cart-detail">
//           <ShoppingCartOutlinedIcon />
//           <p className="cart-amount">{cart.length}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Cart.css";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, setCart, count, setCount } = useContext(CartContext);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storedCartCount = JSON.parse(localStorage.getItem("count"));
    if (storedCart && storedCartCount) {
      setCart(storedCart);
      setCount(storedCartCount);
    }

    const timeoutId = setTimeout(() => {
      localStorage.clear();
      setCart([]);
      setCount(0);
    }, 3600000 );

    return () => clearTimeout(timeoutId);
  }, [setCart, setCount]);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <ShoppingCartOutlinedIcon />
      ) : (
        <div className="cart-detail">
          <ShoppingCartOutlinedIcon />
          <p className="cart-amount">{count}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

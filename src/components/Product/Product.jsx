import React from "react";
import "./Product.css";

const Product = ({product}) => {
  return (
    <div className="container-product">
      <div className="container-img">
        <img className="img" src={product.imgUrl} alt={product.model} />
      </div>
      <div className="container-data">
        <div className="description">
            <h3>{product.model} - {product.brand}</h3>
            <p>Price: ${product.price}</p>
            <p>CPU: {product.cpu}</p>
            <p>RAM: {product.ram}</p>
            <p>Operating System: {product.os}</p>
            <p>Display Resolution: {product.displayResolution}</p>
            <p>Battery: {product.battery}</p>
            <p>Camera Primary: {product.primaryCamera}</p>
            <p>Camera Secondary: {product.secondaryCmera}</p>
            <p>Dimentions: {product.dimentions}</p>
            <p>Weight: {product.weight}</p>
        </div>
        <div className="actions">
            <h5>Memory Size{product.internalMemory}</h5>
            <h5>Colors: {product.colors[0]} </h5>
        </div>
      </div>
    </div>
  );
};

export default Product;

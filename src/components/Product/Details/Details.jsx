import React from "react";

const Details = ({ product }) => {
  return (
    <div className="description">
      <h3>
        {product.model} - {product.brand}
      </h3>
      <p>
        <strong style={{ fontWeight: "bold" }}>Price:</strong>${product.price}
      </p>
      <p>
        <strong style={{ fontWeight: "bold" }}>CPU:</strong> {product.cpu}
      </p>
      <p>
        <strong style={{ fontWeight: "bold" }}>RAM:</strong>
        {product.ram}
      </p>
      <p>
        <strong style={{ fontWeight: "bold" }}>Operating System:</strong>
        {product.os}
      </p>
      <p>
        <strong style={{ fontWeight: "bold" }}>Display Resolution:</strong>
        {product.displayResolution}
      </p>
      <p>
        <strong style={{ fontWeight: "bold" }}>Battery:</strong>
        {product.battery}
      </p>
      <p>
        <strong style={{ fontWeight: "bold" }}>Camera Primary:</strong>
        {product.primaryCamera}
      </p>
      <p>
        <strong style={{ fontWeight: "bold" }}>Camera Secondary:</strong>
        {product.secondaryCmera}
      </p>
      <p>
        <strong style={{ fontWeight: "bold" }}>Dimentions:</strong>
        {product.dimentions}
      </p>
      <p>
        <strong style={{ fontWeight: "bold" }}>Weight:</strong>
        {product.weight}
      </p>
    </div>
  );
};

export default Details;

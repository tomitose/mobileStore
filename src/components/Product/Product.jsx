import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Product.css";
import { POST } from "../../services/POST";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const [selected, setSelected] = useState(null);
  const [colorSel, setColorSel] = useState(null);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  

  const memorySize = product.internalMemory.map((item, index) => {
    return (
      <Button
        key={index}
        disabled={index !== 0}
        color="secondary"
        variant="outlined"
        style={{
          backgroundColor: selected === index ? "#ded3eb" : "white",
          color: "#9c27b0",
          margin: 5,
        }}
        onClick={() => handleClickMemory(index)}
      >
        {item}
      </Button>
    );
  });

  const colorSelected = product.colors.map((item, index) => {
    return (
      <Button
        key={index}
        disabled={index !== 0}
        color="secondary"
        variant="outlined"
        style={{
          backgroundColor: colorSel === index ? "#ded3eb" : "white",
          color: "#9c27b0",
          margin: 5,
        }}
        onClick={() => handleClickColor(index)}
      >
        {item}
      </Button>
    );
  });

  const handleClickMemory = (index) => {
    setSelected(index);
  };

  const handleClickColor = (index) => {
    setColorSel(index);
  };

  const handleAddToCart = async () => {
    const body = {
      id: product.id,
      colorCode: product.options.colors[0],
      storageCode: product.options.storages[0],
    };

    POST(body);


    // function addProductoToCart(){
    //   const cart = document.getElementById('cart')
    //   const quantity = parseInt(cart.textContent)
    //   cart.textContent = quantity+1 // Reemplazado por metodo POST a cart.TextConent
    // }
    
    // comprarbtn.addEventListener("click",()=>{ // comprarbtn reemplazar por boton de Add to cart
    //   addProductoToCart()
    //   const startTime = new Date
    //   const deltaTime = 3600000 //
    //   localStorage.setItem("startTime",startTime)
    
    
    
    //   setTimeout(() => {
    //     const started = new Date(localStorage.getItem("startTime"))
    //     const currentTime = new Date
    
    //     const t1 = started.getTime()
    //     const t2 = currentTime.getTime()
      
    //     if((t2-t1)>deltaTime){
    //     cart.textContent = 0 // Reemplazado por metodo POST a cart.TextConent
    //     }
    //   }, deltaTime)
    // })

  };

  return (
    <div className="container-product">
      <div className="container-img">
        <img className="img" src={product.imgUrl} alt={product.model} />
      </div>
      <div className="container-data">
        <div className="description">
          <h3>
            {product.model} - {product.brand}
          </h3>
          <p>
            <strong style={{ fontWeight: "bold" }}>Price:</strong>$
            {product.price}
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
        <div className="actions">
          <h4>Memory Size: {memorySize} </h4>

          <h4>
            Colors:
            {colorSelected}
          </h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              className="btn-add-cart"
              variant="contained"
              sx={{ backgroundColor: "#6c2db1" }}
              onClick={handleAddToCart}
            >
              + Add to Cart
            </Button>
          </div>
          <div>
            <div className="btn-back">
              <Button
                className="btn-back-add"
                variant="contained"
                sx={{ backgroundColor: "#6c2db1" }}
                onClick={goBack}
              >
                Go back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

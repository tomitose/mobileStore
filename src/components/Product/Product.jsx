import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import "./Product.css";
import { POST } from "../../services/POST";
import { useNavigate } from "react-router-dom";
import Details from "./Details/Details";
import { CartContext } from "../Context/CartContext";

const Product = ({ product }) => {
  const [selected, setSelected] = useState(0);
  const [colorSel, setColorSel] = useState(0);
  const { addToCart, cart } = useContext(CartContext);

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
          backgroundColor:
            selected === index ? "var(--tertiary-color-2)" : "white",
          color: "var(--secondary-color)",
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
          backgroundColor:
            colorSel === index ? "var(--tertiary-color-2)" : "white",
          color: "var(--secondary-color)",
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

    addToCart(body);
    POST(body);
    localStorage.setItem("count", JSON.stringify(cart.length));

  };

  return (
    <div className="container-product">
      <div className="container-img">
        <img className="img" src={product.imgUrl} alt={product.model} />
      </div>
      <div className="container-data">
        <Details product={product} />
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
                variant="outlined"
                sx={{
                  color: "var(--secondary-color2)",
                  borderColor: "var(--secondary-color2)",
                }}
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

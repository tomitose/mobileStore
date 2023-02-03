import React from "react";
import Button from "@mui/material/Button";
import "./Products.css";

const Products = ({ products }) => {
  return (
    <ul className="list-cells">
      {products.map((product) => (
        <li key={product.id}>
          <div className="container-products">
            <div className="content">
              <img src={product.imgUrl} alt="img" className="img-product" />
              <h3 className="item-name">
                {product.brand} - {product.model}
              </h3>
              <p className="price-nmb">Price: ${product.price}</p>
              <Button
                sx={{ marginTop: 6 }}
                size="small"
                color="secondary"
                className="btn-info"
              >
                + Info
              </Button>
              <br />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;

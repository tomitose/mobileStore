import React from "react";
import Button from "@mui/material/Button";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <ul className="list-cells">
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>
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
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Products;

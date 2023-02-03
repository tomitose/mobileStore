import React from "react";
import Bread from "../Bread/Bread";
import * as API from "../../services/getFetch";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Products from "../Products/Products";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    API.getProducts()
      .then(setProducts)
      .catch(console.log("Error"))
      .finally(() => {
        setLoading(false);
      });
      console.log(products)
  }, []);

  const search = (products) => {
    return products.filter((product) =>
      product.model.toLowerCase().includes(query)
    );
  };

  return (
    <div className="container-home">
      <Bread />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {loading ? (
        <Stack
          sx={{ color: "grey.500", display: "flex", alignItems: "center" }}
        >
          <CircularProgress color="secondary" />
        </Stack>
      ) : (
        <div className="container-cell">
            <Products products={search(products)} />
        </div>
      )}
    </div>
  );
};

export default Home;

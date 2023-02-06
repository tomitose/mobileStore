import React from "react";
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
      .then(data => {
        console.log('API response:', data);
        setProducts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const search = (products) => {
    const words = query.toLowerCase().split(" ");
    return products.filter(product =>
      words.every(word =>
        product.model.toLowerCase().includes(word) ||
        product.brand.toLowerCase().includes(word)
      )
    );
  };

  return (
    <div className="container-home">
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

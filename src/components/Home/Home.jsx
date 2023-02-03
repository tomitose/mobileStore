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
  const [query, setQuery] = useState("")


  useEffect(() => {
    setLoading(true);
    API.getProducts()
      .then(setProducts)
      .catch(console.log("Error"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const search = (products) => {
    return products.filter((product) => product.model.toLowerCase().includes(query));
  };

  return (
    <div className="container-home">
      <Bread />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
          <h1 className=" text-center text-accent-content pt-6"> Cellphones</h1>
          <Products products={search(products)} />
        </div>
      )}
    </div>
  );
};

export default Home;

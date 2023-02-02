import React from "react";
import Bread from "../Bread/Bread";
import Searchbar from "../Searchbar/Searchbar";
import * as API from "../../services/getFetch";
import { useState,useEffect } from "react";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Products from "../Products/Products";
import "./Home.css";


const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        API.getProducts()
          .then(setProducts)
          .catch(console.log("Error"))
          .finally(() => {
            setLoading(false);
          });
      }, []);

  return (
    <div>
        <Bread />
        <Searchbar products={products}/>
        {
            loading ? (
                <Stack sx={{ color: 'grey.500' ,display:'flex', alignItems: 'center'}}>
                    <CircularProgress color="secondary" />
                </Stack>
            ) : (
                <div className="container-cell">
                    <h1 className=" text-center text-accent-content pt-6"> Cellphones</h1>
                    <Products products={products}/>
                </div>
            )
        }
    </div>
  );
};

export default Home;

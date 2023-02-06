import { Button, CircularProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from "../../services/getFetch"
import Product from '../Product/Product';
import "./ProductDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true);
  const {id} = useParams()

  useEffect(()=> {
    setLoading(true)
    window.scrollTo(0, 0);
    API.getProductDetail(id)
    .then(setProduct)
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  },[id]);

  return (
    <div className='container-detail'>
      {loading ? (
        <Stack
        sx={{ color: "grey.500", display: "flex", alignItems: "center" }}
      >
        <CircularProgress color="secondary" />
      </Stack>
      ) : (
        <Product product={product}/>
      )
      }
    </div>
  )
}

export default ProductDetail
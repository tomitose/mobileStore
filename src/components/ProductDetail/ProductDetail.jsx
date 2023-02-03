import { CircularProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from "../../services/getFetch"

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
    <div style={{minHeight:"80vh"}}>
      {loading ? (
        <Stack
        sx={{ color: "grey.500", display: "flex", alignItems: "center" }}
      >
        <CircularProgress color="secondary" />
      </Stack>
      ) : (
        <div className=''>
          <div className='container-img'>
            <img src={product.imgUrl} alt="img" />
          </div>
          <div className='container-data'>
          </div>         
        </div>
      )
      }
    </div>
  )
}

export default ProductDetail
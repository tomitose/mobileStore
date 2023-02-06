import axios from 'axios';

const API_URL = 'https://2gm2eu9uuw.us-east-1.awsapprunner.com/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product`);
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/product/${id}`);
    return response.data;    
  } catch (error) {
    throw error;
  }
};


export const addProductToCart = async () => {
  try {
    console.log(`${API_URL}/cart`)
    const response = await axios.post(`${API_URL}/cart`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

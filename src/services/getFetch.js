import axios from 'axios';

const API_URL = 'https://2gm2eu9uuw.us-east-1.awsapprunner.com/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/product`);
    const firstEightProducts = response.data.slice(0, 8);
    return firstEightProducts;
  } catch (error) {
    throw error;
  }
};

export const getProductDetail = async (id) => {
  try {
    console.log(`${API_URL}/product/${id}`)
    const response = await axios.get(`${API_URL}/product/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const addProductToCart = async (product) => {
  try {
    console.log(`${API_URL}/cart`, product)
    const response = await axios.post(`${API_URL}/cart`, product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

import axios from 'axios';
import {BASE_URL} from './apis';

export const productsList = async () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'get',
        url: `https://fakestoreapi.com/products`,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const {data} = await response;
      console.log('response here for product', response);
      resolve(data);
    } catch (error) {
      console.log('login', 'error', error);
      reject(error);
    }
  });

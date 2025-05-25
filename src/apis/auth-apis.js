import axios from 'axios';
import {BASE_URL} from './apis';

export const onLogin = async details =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'post',
        url: `https://samanraees.com/api/admin/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: details?.email,
          password: details?.password,
        },
      });
      const {data} = await response;
      console.log('response here for login', response);
      resolve(data);
    } catch (error) {
      console.log('login', 'error', error);
      reject(error);
    }
  });

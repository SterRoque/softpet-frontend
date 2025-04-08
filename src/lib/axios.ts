import axios from 'axios';

export const api = axios.create({
   baseURL: process.env.API_URL,
   validateStatus: function (status) {
      return status < 400;
   },
});

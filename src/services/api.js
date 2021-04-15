import axios from 'axios';

console.log(process.env.GATSBY_API_URL);
console.log(process.env.GATSBY_API_URL);
console.log(process.env.GATSBY_API_URL);
console.log(process.env.GATSBY_API_URL);

const api = axios.create({
  baseURL: process.env.GATSBY_API_URL,
});

export default api;

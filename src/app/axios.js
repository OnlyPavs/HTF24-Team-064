import axios from 'axios';

// Set a timeout of 10 seconds
axios.defaults.timeout = 10000; // 10 seconds timeout

// Function to introduce a delay
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create an Axios instance
const instance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
});

// Interceptor to handle rate limiting
instance.interceptors.request.use(async (config) => {
  // Introduce a delay before each request
  await sleep(10000); // 1 second delay (adjust as needed)
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Error handling interceptor
instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // Handle errors globally
  console.error('API call error:', error);
  return Promise.reject(error);
});

export default instance;

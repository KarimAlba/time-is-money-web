import axios from "axios";

const baseUrl = 'https://api.time-money.shop/';

axios.defaults.baseURL = baseUrl;

const token = localStorage.getItem('token');

if (token)  {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const axiosConfig = axios;


export default axiosConfig;

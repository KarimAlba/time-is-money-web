import axios from "axios";

const baseUrl = 'http://89.108.70.120/api/main';

axios.defaults.baseURL = baseUrl;

const token = localStorage.getItem('token');

if (token)  {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const axiosConfig = axios;


export default axiosConfig;

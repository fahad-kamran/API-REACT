import axios from "axios";

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/', // Set your desired baseURL here
});

export default API;
import axios from 'axios';

const url = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com/';

export const baseApi = axios.create({ baseURL: url });
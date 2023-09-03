import axios from 'axios';

const url = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com/';

const baseApi = axios.create({ baseURL: url });

export async function httpGet(endpoint, options = {}) {
    const response = await baseApi.get(endpoint, options);
    return response.data;
}

export async function httpPost(endpoint, data = {}, options = {}) {
    const response = await baseApi.post(endpoint, data, options);
    return response.data;
}

export async function httpPut(endpoint, data = {}, options = {}) {
    const response = await baseApi.put(endpoint, data, options);
    return response.data;
}

export async function httpDelete(endpoint) {
    const response = await baseApi.delete(endpoint);
    return response.data;
}
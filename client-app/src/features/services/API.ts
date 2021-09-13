import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://api.tvmaze.com/search'; //TODO set base URL in env file

axios.interceptors.response.use(undefined, error => {
    console.log('API CONNECTION ERROR', error.response.status, error.message);
    // TODO update message by error type.
    throw new Error('API connection fails.');
})

const responseBody = (response: AxiosResponse) => response.data

const API = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody) 
};

export default API;
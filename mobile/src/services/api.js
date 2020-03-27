import axios from 'axios';

const api = axios.create({
    baseURL: 'http://backend-be-the-hero.herokuapp.com',
});

export default api;
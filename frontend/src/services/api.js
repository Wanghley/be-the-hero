import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://backend-be-the-hero.herokuapp.com/',

});

export default api;

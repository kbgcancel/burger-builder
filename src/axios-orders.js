import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-dcfa0.firebaseio.com/'
});

export default instance;
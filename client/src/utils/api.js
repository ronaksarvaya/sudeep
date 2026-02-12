import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Should be env variable ideally
});

export default api;

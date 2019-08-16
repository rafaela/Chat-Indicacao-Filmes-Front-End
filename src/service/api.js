import axios from 'axios'

const api = axios.create({baseURL: 'https://indicacine-backend.herokuapp.com/api'})

export default api;


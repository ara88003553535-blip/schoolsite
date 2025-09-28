import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
export default axios.create({ baseURL: API_URL + '/api' })

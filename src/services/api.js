import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.rocketzweb.space/api'
})

export default api
// Esto no es un componente, se usa axios para hacer la petición a la API
import axios from 'axios'

// const base_url = 'https://ecommerce-json-jwt.onrender.com' ------ EN MAYUS
const BASE_URL = 'http://localhost:3000'

const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

export {
  registerUserService,
  loginUserService
}

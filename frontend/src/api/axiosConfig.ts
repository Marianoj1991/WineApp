import axios, {AxiosInstance} from 'axios'
import { jwtDecode } from "jwt-decode";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000, // tiempo de espera opcional
  headers: { 'Content-Type': 'application/json' }
})

// Verifica si el token ha expirado
const isTokenExpired = (token: string) => {
  const decoded = jwtDecode(token)
  console.log(decoded)
  if (!decoded || typeof decoded.exp === 'undefined' ) return true; 
  return decoded.exp * 1000 < Date.now();
};

//  CONFIGURAR LOS INTERCEPTORES PARA TOKENS
axiosInstance.interceptors.request.use(
  (config) => {
    if (config.url !== '/login') {
      const token = localStorage.getItem('token')
      if (token) {
        if (isTokenExpired(token)) {
          alert('Token has expired')
          localStorage.removeItem('token')
          window.location.href = '/login'
          return Promise.reject(
            new Error('Token expirado, redirigiendo al login')
          )
        }
        config.headers['Authorization'] = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//  Interceptor de respuesta
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.headers['authorization']) {
      const token = response.headers['authorization'].split(' ')[1]
      const decoded = jwtDecode(token)
      console.log(decoded)
      localStorage.setItem('token', token)
    }
    return response
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          console.error('Acceso denegado')
          break
        case 500:
          console.error('Error del servidor')
          break
        default:
          console.error('Error desconocido')
      }
    } else if (error.request) {
      console.error('Error de red')
    } else {
      console.error('Error', error.message)
    }
    return Promise.reject(error)
  }
)
export default axiosInstance

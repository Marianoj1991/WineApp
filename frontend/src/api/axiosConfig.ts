import axios, {AxiosInstance} from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000, // tiempo de espera opcional
  headers: { 'Content-Type': 'application/json' }
})

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       window.location = '/login'
//     }
//     return Promise.reject(error)
//   }
// )

export default axiosInstance

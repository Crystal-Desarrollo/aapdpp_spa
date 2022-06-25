import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.API_URL
})

axiosInstance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
        'aapdpp-token'
    )}`
    return config
})
export default axiosInstance

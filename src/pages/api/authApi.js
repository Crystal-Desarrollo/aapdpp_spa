import axiosInstance from './apiHelper.js'

class AuthApi {
    login(userData) {
        console.log(axiosInstance)
        return axiosInstance.post('/api/login', userData)
    }

    logout() {
        return axiosInstance.post('/api/logout')
    }
}

export default new AuthApi()

import axiosInstance from './apiHelper.js'

class AuthApi {
    login(userData) {
        return axiosInstance.post('/login', userData)
    }

    logout() {
        return axiosInstance.post('/logout')
    }
}

export default new AuthApi()

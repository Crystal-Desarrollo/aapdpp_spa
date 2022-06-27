import axiosInstance from './apiHelper.js'

class AuthApi {
    login(userData) {
        return axiosInstance.post('/login', userData)
    }

    logout() {
        return axiosInstance.post('/logout')
    }

    me(token) {
        return axiosInstance.get('/user', { token })
    }
}

export default new AuthApi()

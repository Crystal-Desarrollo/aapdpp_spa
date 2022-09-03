import axiosInstance from './apiHelper.js'

class AuthApi {
    CSRF_URL = process.env.REACT_APP_CSRF_URL
    async login(userData) {
        await axiosInstance.get(this.CSRF_URL)

        return axiosInstance.post('/login', userData)
    }

    logout() {
        return axiosInstance.post('/logout')
    }

    async me(token) {
        await axiosInstance.get(this.CSRF_URL)

        return axiosInstance.get('/user', { token })
    }
}

export default new AuthApi()

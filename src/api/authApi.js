import axiosInstance from './apiHelper.js'

class AuthApi {
    CSRF_URL = `${process.env.REACT_APP_API_URL.replace(
        '/api',
        ''
    )}/sanctum/csrf-cookie`
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

    async update(data) {
        return axiosInstance.put('/users', data)
    }
}

export default new AuthApi()

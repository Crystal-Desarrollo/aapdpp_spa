import axiosInstance from './apiHelper.js'

class UsersApi {
    getAll() {
        return axiosInstance.get('/users')
    }
}

export default new UsersApi()

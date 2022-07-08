import axiosInstance from './apiHelper.js'

class UsersApi {
    getAll() {
        return axiosInstance.get('/users')
    }

    register(data) {
        return axiosInstance.post('/register', data)
    }

    delete(id) {
        return axiosInstance.delete('/users/' + id)
    }

    async update(id, data) {
        return axiosInstance.put(`/users/${id}`, data)
    }
}

export default new UsersApi()

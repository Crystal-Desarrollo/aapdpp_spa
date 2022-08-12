import axiosInstance from './apiHelper.js'

class UsersApi {
    getAll() {
        return axiosInstance.get('/users')
    }

    getOne(id) {
        return axiosInstance.get(`/users/${id}`)
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

    async updateStatus(id, status) {
        return axiosInstance.put(`/users/${id}/status`, status)
    }
}

export default new UsersApi()

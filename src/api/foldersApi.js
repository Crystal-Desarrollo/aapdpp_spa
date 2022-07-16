import axiosInstance from './apiHelper.js'

class FoldersApi {
    getAll() {
        return axiosInstance.get('/folders')
    }

    delete(id) {
        return axiosInstance.delete(`/folders/${id}`)
    }

    create(data) {
        return axiosInstance.post('/folders', data)
    }

    update(data, id) {
        return axiosInstance.put(`/folders/${id}`, data)
    }
}

export default new FoldersApi()

import axiosInstance from './apiHelper.js'

class LinksApi {
    getAll() {
        return axiosInstance.get('/links')
    }

    getOne(id) {
        return axiosInstance.get(`/links/${id}`)
    }

    delete(id) {
        return axiosInstance.delete(`/links/${id}`)
    }

    create(data) {
        return axiosInstance.post(`/links`, data)
    }
}

export default new LinksApi()

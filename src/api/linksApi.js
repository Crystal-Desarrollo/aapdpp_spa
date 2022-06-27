import axiosInstance from './apiHelper.js'

class LinksApi {
    getAll() {
        return axiosInstance.get('/links')
    }

    getOne(id) {
        return axiosInstance.get(`/links/${id}`)
    }
}

export default new LinksApi()

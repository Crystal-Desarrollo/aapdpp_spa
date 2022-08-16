import axiosInstance from './apiHelper.js'

class NewsApi {
    getAll() {
        return axiosInstance.get('/meetings')
    }

    getOne(id) {
        return axiosInstance.get(`/meetings/${id}`)
    }

    delete(id) {
        return axiosInstance.delete(`/meetings/${id}`)
    }

    create(data) {
        return axiosInstance.post('/meetings', data)
    }

    edit(data, id) {
        return axiosInstance.post(`/meetings/${id}?_method=PUT`, data)
    }
}

export default new NewsApi()

import axiosInstance from './apiHelper.js'

class NewsApi {
    getAll() {
        return axiosInstance.get('/articles')
    }

    getOne(id) {
        return axiosInstance.get(`/articles/${id}`)
    }

    delete(id) {
        return axiosInstance.delete(`/articles/${id}`)
    }

    create(data) {
        return axiosInstance.post('/articles', data)
    }

    edit(data, id) {
        return axiosInstance.post(`/articles/${id}?_method=PUT`, data)
    }
}

export default new NewsApi()

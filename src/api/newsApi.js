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
}

export default new NewsApi()

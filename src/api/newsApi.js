import axiosInstance from './apiHelper.js'

class NewsApi {
    getAll() {
        return axiosInstance.get('/articles')
    }

    getOne(id) {
        return axiosInstance.get(`/articles/${id}`)
    }
}

export default new NewsApi()

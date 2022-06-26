import axiosInstance from './apiHelper.js'

class NewsApi {
    getAll() {
        return axiosInstance.get('/articles')
    }
}

export default new NewsApi()

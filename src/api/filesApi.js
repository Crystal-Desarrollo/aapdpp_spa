import axiosInstance from './apiHelper.js'

class FilesApi {
    delete(id) {
        return axiosInstance.delete(`/files/${id}`)
    }
    create(data) {
        return axiosInstance.post('/files', data)
    }
}

export default new FilesApi()

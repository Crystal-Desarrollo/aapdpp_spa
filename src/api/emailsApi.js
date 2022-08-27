import axiosInstance from './apiHelper.js'

class EmailsApi {
    sendContactEmail(data) {
        return axiosInstance.post('/contact-us', data)
    }

    sendBroadcast(data) {
        return axiosInstance.post('/broadcast', data)
    }
}

export default new EmailsApi()

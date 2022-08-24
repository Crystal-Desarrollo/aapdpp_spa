import axiosInstance from './apiHelper.js'

class EmailsApi {
    sendEmail(data) {
        return axiosInstance.post('/emails', data)
    }
}

export default new EmailsApi()

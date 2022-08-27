import { useDispatch } from 'react-redux'
import EmailsApi from '../../api/emailsApi'
import { setLoading } from '../../store/slices/appSlice'

export const useSendContactEmail = () => {
    const dispatch = useDispatch()

    return async data => {
        dispatch(setLoading(true))
        try {
            await EmailsApi.sendContactEmail(data)
        } catch (err) {
            return Promise.reject(err.message)
        } finally {
            dispatch(setLoading(false))
        }
    }
}

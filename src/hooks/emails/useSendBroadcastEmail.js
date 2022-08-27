import { useDispatch } from 'react-redux'
import EmailsApi from '../../api/emailsApi'
import { setLoading } from '../../store/slices/appSlice'

export const useSendBroadcastEmail = () => {
    const dispatch = useDispatch()

    return async data => {
        dispatch(setLoading(true))
        try {
            await EmailsApi.sendBroadcast(data)
        } catch (err) {
            return Promise.reject(err.message)
        } finally {
            dispatch(setLoading(false))
        }
    }
}

import { useDispatch } from 'react-redux'
import EmailsApi from '../../api/emailsApi'
import { setLoading } from '../../store/slices/appSlice'

export const useSendEmail = data => {
    const dispatch = useDispatch()

    return async () => {
        dispatch(setLoading(true))
        // const res = await EmailsApi.sendEmail(data)
        setTimeout(() => {
            return Promise.resolve()
        }, 2000)
        dispatch(setLoading(false))
    }
}

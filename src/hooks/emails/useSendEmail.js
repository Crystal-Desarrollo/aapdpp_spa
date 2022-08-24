import { useDispatch } from 'react-redux'
// import EmailsApi from '../../api/emailsApi'
import { setLoading } from '../../store/slices/appSlice'

export const useSendEmail = data => {
    const dispatch = useDispatch()

    return async () => {
        dispatch(setLoading(true))
        // const res = await EmailsApi.sendEmail(data)
        // if (response.status !== 200) {
        //     return Promise.reject(SOMETHING_WENT_WRONG)
        // }
        setTimeout(() => {
            dispatch(setLoading(false))
            return Promise.resolve()
        }, 1000)
    }
}

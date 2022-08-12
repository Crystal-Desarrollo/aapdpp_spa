import { useSelector } from 'react-redux'

export const useIsLoading = () => {
    const { loading } = useSelector(store => store.app)

    return loading
}

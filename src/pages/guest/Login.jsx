import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Guest } from '../layouts/Guest'
import { LoginForm } from '../../components/Auth/LoginForm'

import { login } from '../../store/slices/authSlice'

export function Login() {
    const [data, setData] = useState({})
    const dispatch = useDispatch()

    const handleChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        dispatch(login(data))
    }

    return (
        <Guest>
            <LoginForm onChange={handleChange} onSubmit={handleSubmit} />
        </Guest>
    )
}

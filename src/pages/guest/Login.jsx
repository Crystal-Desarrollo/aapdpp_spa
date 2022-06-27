import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { Guest } from '../layouts/Guest'
import { LoginForm } from '../../components/Auth/LoginForm'

import { login } from '../../store/slices/authSlice'
import { useAuth } from '../../hooks/auth/useAuth'

export function Login() {
    const [data, setData] = useState({})
    const dispatch = useDispatch()
    const { user } = useAuth()

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

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <Guest>
            <LoginForm onChange={handleChange} onSubmit={handleSubmit} />
        </Guest>
    )
}

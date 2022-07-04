import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { LoginForm } from '../../components/Auth/LoginForm'

import { login } from '../../store/slices/authSlice'
import { useAuth } from '../../hooks/auth/useAuth'

export function Login() {
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { user } = useAuth()

    const handleChange = e => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault()
        setError('')

        dispatch(login(data))
            .catch(() => setError('Credenciales Inválidas'))
            .finally(() => setLoading(false))
    }

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <LoginForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            error={error}
            loading={loading}
        />
    )
}

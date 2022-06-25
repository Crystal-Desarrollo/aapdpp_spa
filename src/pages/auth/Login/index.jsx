import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { login } from '../../../store/slices/authSlice'

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
        <div>
            <input
                type="text"
                placeholder="username"
                onChange={handleChange}
                name="email"
            />
            <input
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

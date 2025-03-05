import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../redux/slices/authSlice'
import { Navigate, useNavigate, useRouteLoaderData } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [userData, setUserData] = useState({
        name: '',
        password: ''
    })

    const handleChange = (e) => {
        setError(null)
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        console.log(userData)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!userData.name || !userData.password) {
            setError('Please fill all the fields');
            return;
        }
    
        // Store user in localStorage (no need for await)
        localStorage.setItem('user', JSON.stringify(userData));
    
        // Dispatch login action
        await dispatch(login(userData));
    
        // Get user role from state (assuming role is part of userData)
        const userRole = userData?.role;
    
        if (userRole === 'admin') {
            navigate('/admin/dashboard');
        } 
        if (userRole === 'user') {
            navigate('/auth');
        } 
    };
    
    return (
        <>
            <main>
                <div >
                    <h1>Login</h1>
                    <form>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <label>Username</label> <br />
                        <input type="text" placeholder="Username" name='name' value={userData.name} onChange={handleChange} /> <br />
                        <label>Password</label> <br />
                        <input type="password" placeholder="Password" name='password' value={userData.password} onChange={handleChange} /> <br />
                        <br />
                        <select name="role" onChange={handleChange}>
                            <option>Select User</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <button onClick={handleSubmit} type="submit">Login</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login
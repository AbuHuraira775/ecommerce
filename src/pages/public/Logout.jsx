import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import { Link } from 'react-router-dom'

function Logout() {
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.clear()
        dispatch(logout())
    })
    return (
        <>
            <h1>Logout</h1>
            <p>No user is logged in.</p>
            <Link to='/login'><button>Login</button></Link>
        </>
    )
}

export default Logout
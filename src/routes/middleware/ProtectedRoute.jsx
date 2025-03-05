import React from 'react'
import AdminLayout from '../../components/AdminLayout/index'
import { Navigate, Outlet } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('user'))
console.log(user)

const getRole = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const userRole = user ? user.role : null;
    return userRole
}
const AdminProtectedRoute = () => {
    const userRole = getRole();
    if (userRole === 'admin') {
        return <Outlet />
    }
    return <Navigate to='/' />
}
const UserProtectedRoute = () => {
    // const user = JSON.parse(localStorage.getItem('user'))
    // const userRole = user ? user.role : null;
    const userRole = getRole();
    if (userRole === 'user') {
        return <Outlet />
    }
    return <Navigate to='/' />
}

const GuestRoute = () => {
    const userRole = getRole();
    if (userRole === 'admin') <Navigate to='/auth' />
}

export { AdminProtectedRoute, UserProtectedRoute, GuestRoute }
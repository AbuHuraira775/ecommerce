import React from 'react'
import logo from '../../assets/logo.jpg'
import '../header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="admin-header ">
        <Link to='/admin/dashboard'>
        <div className="admin-header_logo logo-header center">
          <img className='logo' width={100} src={logo} alt="E-commerce Logo" />
            <h3>Shopy</h3>
        </div>
        </Link>
        <nav className="admin-header__nav header-links">
            <ul>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/settings'><li>Settings</li></Link>
                <Link to='/login'><li>Login</li></Link>
            </ul>
        </nav>
       
    </header>
  )
}

export default Header
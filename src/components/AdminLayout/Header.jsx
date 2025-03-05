import React from 'react'
import logo from '../../assets/logo.jpg'
import '../header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (

    <header className="admin-header sidebar"  data-simplebar>
      <div className="admin-header_logo logo-header center">
        <Link to='/admin/dashboard'>
          <img className='logo' width={100} src={logo} alt="E-commerce Logo" />
        </Link>
        <Link to='/admin/dashboard'>
          <h3>Shopy</h3>
        </Link>
        <div className="burger-icon">
        
        </div>
      </div>
      <nav className="admin-header__nav header-links">
        <ul>
          <Link to='dashboard'><li>Dashboard</li></Link>
          <Link to='products'><li>Products</li></Link>
          <Link to='orders'><li>Orders</li></Link>
          <Link to='customers'><li>Customers</li></Link>
          <Link to='settings'><li>Settings</li></Link>
        </ul>
      </nav>
      <div className="admin-header__profile">
        <Link to='/logout'><button>Logout</button></Link>
      </div>
    </header>
  )
}

export default Header
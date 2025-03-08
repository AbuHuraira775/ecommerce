import React from 'react'
import logo from '../../assets/images/brand-logi.png'
import '../header.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <section className="user-sidebar sidebar">
      <Link to='/auth'>
        <div className="user-sidebar-logo sidebar-logo center flex">
          <img className='logo' src={logo} alt="Sidebar Logo" />
          <h3>Ant Design</h3>
        </div>
      </Link>
      <nav className="user-sidebar-links sidebar-links">
        <ul>
          <Link to='product'><li>Products</li></Link>
          <Link to='orders'><li>Orders</li></Link>
          <Link to='settings'><li>Settings</li></Link>
        </ul>
      </nav>
      <div className="user-sidebar-profile">
        <Link to='/logout'><button>Logout</button></Link>
      </div>
    </section>
  )
}

export default Sidebar
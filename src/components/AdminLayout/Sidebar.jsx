import React from 'react'
import logo from '../../assets/images/brand-logi.png'
import '../header.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (

    <section className="admin-sidebar sidebar"  data-simplebar>
      <div className="admin-sidebar-logo sidebar-logo center">
        <Link to='/admin/dashboard'>
          <img className='logo' width={100} src={logo} alt="Sidebar Logo" />
        </Link>
        <Link to='/admin/dashboard'>
          {/* <h3>Ant Design</h3> */}
        </Link>
        <div className="burger-icon">
        
        </div>
      </div>
      <nav className="admin-sidebar-links sidebar-links">
        <ul>
          <Link to='dashboard'><li>Dashboard</li></Link>
          <Link to='products'><li>Products</li></Link>
          <Link to='orders'><li>Orders</li></Link>
          <Link to='customers'><li>Customers</li></Link>
          <Link to='settings'><li>Settings</li></Link>
        </ul>
      </nav>
      <div className="admin-sidebar-profile">
        <Link to='/logout'><button>Logout</button></Link>
      </div>
    </section>
  )
}

export default Sidebar
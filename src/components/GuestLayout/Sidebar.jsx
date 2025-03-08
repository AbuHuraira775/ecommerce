import React from 'react'
import logo from '../../assets/images/brand-logi.png'
import '../header.css'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'

function Sidebar() {
  return (
    <section className="guest-sidebar ">
      <Link to='/'>
        <div className="guest-sidebar-logo sidebar-logo center">
          <img className='logo' width={100} src={logo} alt="Sidebar Logo" />
          {/* <h3>Ant Design</h3> */}
        </div>
      </Link>
      <nav className="guest-sidebar-links sidebar-links">
        <ul>
          <Link to='/products'><li>Products</li></Link>
          <Link to='/settings'><li>Settings</li></Link>

        </ul>
      </nav>

    </section>
  )
}

export default Sidebar
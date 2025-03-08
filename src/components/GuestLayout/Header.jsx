import React from 'react'
import logo from '../../assets/images/brand-logi.png'
import '../header.css'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined, SearchOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Input } from 'antd'

function Header() {
  return (
    <header className="guest-header header">

      <div className="left">
        <img src={logo} alt="" width={200}/>
        <h4>Brand Name</h4>
      </div>

      <div className="right">
        <Input
          placeholder="Search for products..."
          prefix={<SearchOutlined style={{ color: "gray" }} />}
          allowClear
          onPressEnter={(e) => onSearch(e.target.value)} // Trigger search on Enter key
          style={{ width: 300, borderRadius: 8 }}
        />
        <ShoppingOutlined  />
        <Link to='/login'>Sign In</Link> / <Link to='/register'>Register</Link>
      </div>

    </header>
  )
}

export default Header
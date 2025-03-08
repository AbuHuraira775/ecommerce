import React from 'react'
import logo from '../../assets/images/brand-logi.png'
import '../header.css'
import { Link } from 'react-router-dom'
import { UserOutlined ,ShoppingCartOutlined, SearchOutlined, HeartOutlined, FileTextOutlined, ShoppingOutlined,HeartFilled  } from '@ant-design/icons'
import { Input } from 'antd'

function Header() {
  return (
    <header className="admin-header header">

      <div className="left">
        <img src={logo} alt="" width={100} />
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
        <ShoppingOutlined   />
        <HeartOutlined  />
        <HeartFilled  />
        {/* //dropdown that contains logout */}
        <UserOutlined /> 

        <Link to='/login'>Sign In</Link> / <Link to='/register'>Register</Link>
      </div>

    </header>

  )
}

export default Header
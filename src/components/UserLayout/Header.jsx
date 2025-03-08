import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchValue } from '../../redux/slices/searchSlice';
import { Input, Dropdown, Menu, Badge } from 'antd';
import {
  UserOutlined, ShoppingOutlined, SearchOutlined,
  HeartOutlined
} from '@ant-design/icons';
import { IoBookmarksOutline } from "react-icons/io5";
import logo from '../../assets/images/brand-logi.png';
import '../header.css';
import CartModal from '../../modals/CartModal';

function Header() {
  const cartItems = useSelector(state => state.cart.cartProducts);
  const wishlistProducts = useSelector((state) => state.wishlists.wishlistProducts)
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false)
  const setSearchValue = (e) => {
    setInpVal(e.target.value);
    dispatch(searchValue(e.target.value));
  };

  const profileMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/register">Register</Link>
      </Menu.Item>
    </Menu>
  );

  const checkout = () => {
    alert()
    setIsModalOpen(false)
  }

  return (
    <header className="user-header">
      <div className="left flex">
        <Link to='/auth'>
          <img src={logo} alt="Brand Logo" width={150} />
        </Link>
        <h4>Ant Design</h4>
      </div>

      <div className="right">
        <div className="search">

          <Input
            placeholder="Search for products..."
            prefix={<SearchOutlined style={{ color: "gray" }} />}
            allowClear
            onChange={setSearchValue}
            value={inpVal}
            style={{ width: 300, borderRadius: 8 }}
          />
        </div>

        <div className="cart" onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>
          <Badge count={cartItems.length} size="small" >
            <ShoppingOutlined className="icon" />
          </Badge>
        </div>
        <CartModal isOpen={isModalOpen} onClose={checkout} />

        <div className="wishlist">
          <Link to='wishlist'>
            <Badge count={wishlistProducts.length} size="small">
              <IoBookmarksOutline className="icon" />
            </Badge>
          </Link>
          {/* <HeartOutlined className="icon" /> */}
        </div>

        <div className="profile">
          <Dropdown overlay={profileMenu} trigger={['click']} placement="bottomRight">
            <UserOutlined className="profile-icon icon" />
          </Dropdown>
        </div>

      </div>

    </header>
  );
}

export default Header;

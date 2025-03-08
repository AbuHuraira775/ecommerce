import React, { useState } from 'react'
import BtnComponent from './BtnComponent'
import { Card, Button, Flex } from "antd";
import { addToCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToFavorite, removeFromFavorite } from '../../redux/slices/wishlistSlice';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';


function ProductCard({isFavoriteItem, icon, product, btnText, onclick, title, description, price, brand, category, image, rating, stock, id }) {
  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(false)
  const addItemToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleFavorite = (product) => {
    setIsFavorite(!isFavorite)
    if (isFavorite || isFavoriteItem) {
      dispatch(removeFromFavorite({ ...product, isFavorite: false }))
    }
    else dispatch(addToFavorite({ ...product, isFavorite: true }))
  }
  return (

    <Card style={{ width: 250, borderRadius: 10, boxShadow: "0 16px 32px rgba(0,0,0,0.1)" }} hoverable={true}>
      <Flex vertical align="center" gap="small">
        <Link to={`/product/${id}`}>
          <div className="image">
            <img src={image} alt={title} width="100px" height="120px" style={{ borderRadius: 8 }} />
          </div>
        </Link>

        {/* Description Section */}
        <Flex vertical align="start" gap="10">
          <h3><strong>{title}</strong></h3>
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Brand:</strong> {brand}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Rating:</strong> {rating} ⭐</p>
          <p><strong>Stock:</strong> {stock > 0 ? "In Stock" : "Out of Stock"}</p>
          <div className="icon">
            {/* {icon} */}
            {isFavorite || isFavoriteItem?
              <HeartFilled className="icon" onClick={() => handleFavorite(product)} style={{ color: 'red' }} />
              :
              <HeartOutlined className="icon" onClick={() => handleFavorite(product)} />
            }
          </div>

        </Flex>

        {/* Action Button */}
        <Button type="primary" block onClick={() => addItemToCart(product)}>
          {btnText || "Add to Cart"}
        </Button>
      </Flex>
    </Card>
  );
};

export default ProductCard
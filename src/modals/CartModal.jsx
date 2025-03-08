import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, List, Avatar } from "antd";
import { removeFromCart } from "../redux/slices/cartSlice";

const CartModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartProducts);

  return (
    <Modal title="Your Cart" open={isOpen} onCancel={onClose} footer={null}>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={cartItems}
          renderItem={(item) => (
            <List.Item
              actions={[<Button danger onClick={() => dispatch(removeFromCart(item.id))}>Remove</Button>]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.images[0]} />}
                title={item.title}
                description={`Price: $${item.price} | Quantity: ${cartItems.length}`}
              />
            </List.Item>
          )}
        />
      )}
      <div style={{ textAlign: "right", marginTop: 20 }}>
        <Button type="primary" onClick={onClose}>Proceed to checkout</Button>
      </div>
    </Modal>
  );
};

export default CartModal;
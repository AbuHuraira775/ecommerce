import { Button, Input, Modal } from 'antd'
import React, { useState } from 'react'

function ReviewModal({ isOpen, onClose, onSubmit }) {
  const [review, setReview] = useState('')
  const handleChange = (e) => {
    setReview(e.target.value)
    console.log(review)
  }

  const handleSubmit = () => {
    if (review.trim() !== "") {
      onSubmit(review); // Send review to the parent
      setReview(""); // Clear input after submission
      onClose(); // Close modal
    }
  };
  return (
    <Modal title="What is your opinion" open={isOpen} onCancel={onClose} footer={null}>
      <div style={{ textAlign: "right", marginTop: 20 }}>
        <Input onChange={handleChange} /> <br /><br />
        <Button type="primary" onClick={handleSubmit}>Add</Button>
      </div>
    </Modal>
  )
}

export default ReviewModal
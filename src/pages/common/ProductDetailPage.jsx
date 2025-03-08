import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import localData from '../../api/Products.json'
import Input from '../../components/common/InpComponent';
import BtnComponent from '../../components/common/BtnComponent';
import { getProducts } from '../../redux/slices/productSlice'
import { removeFromCart } from '../../redux/slices/cartSlice';
import ReviewModal from '../../modals/ReviewModal';
import { Button } from 'antd';

function ProductDetailPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { id } = useParams()
    const [review, setReview] = useState('')
    const dispatch = useDispatch()
    let products = useSelector(state => state.products.products);
    products = localData.products
    const displayProduct = products.find(item => item.id == id)
    console.log(displayProduct)

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/products`, {
            method: "GET"
        })
        const data = await response.json()
        if (response.ok) {
            dispatch(getProducts(data.products));
            console.log(data.products)

        }
    }
    useEffect(() => {
        // fetchData();

    }, []);

    const addReveiw = () => {
        displayProduct.reviews.push(review)
    }
    const removeItemFromcart = (id)=>{
        alert(id)
        dispatch(removeFromCart(id))
    }

    return (
        <div>
            <div className="productCard">

                {!displayProduct ?
                    <p>Product is not fetched correctly. Please go back and redirect the page again</p> :
                    <div>
                        <img width={400} src={displayProduct.images[0]} />
                        <p>{displayProduct.title}</p>
                        <p>{displayProduct.category}</p>
                        <p>{displayProduct.price}</p>
                        <p>{displayProduct.brand}</p>
                        <p>{displayProduct.availabilityStatus}</p>
                        <p>{displayProduct.stock}</p>
                        <p>{displayProduct.minimumOrderQuantity}</p>
                        <p>{displayProduct.rating}</p>
                        <p>{displayProduct.returnPolicy}</p>
                        <p>{displayProduct.shippingInformation}</p>
                        <p>{displayProduct.warrantyInformation}</p>
                        <p>{displayProduct.weight}</p>
                    </div>
                }
            </div>

            <div className="reviews">
                <div className="heading">
                    <h2>Customer Review </h2>
                    <div className="reviews">
                        {displayProduct?.reviews.map((review, i) => {
                            return <div className="review" key={i}>
                                <p> {review.date}</p>
                                <p> {review.comment}</p>
                                <p>{review.rating}</p>
                                <p> {review.date}</p>
                            </div>
                        })}

                        <div className="addReview">
                        <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={addReview} />
                        <Button  type="primary" onClick={() => setIsModalOpen(true)}>Add Your Review</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
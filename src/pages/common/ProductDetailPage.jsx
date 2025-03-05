import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import localData from '../../api/Products.json'
import Input from '../../components/common/InpComponent';
import BtnComponent from '../../components/common/BtnComponent';

function ProductDetailPage() {
    const { id } = useParams()
    const [review, setReview] = useState('')
    let products = useSelector(state => state.products.products);
    products = localData.products
    const displayProduct = products.find(item => item.id == id)
    console.log(displayProduct)
    const addReveiw = ()=>{
        displayProduct.reviews.push(review)
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
                    {displayProduct.reviews.map(review =>{
                        return <div className="review">
                            <p> {review.date}</p>
                            <p> {review.comment}</p>
                            <p>{review.rating}</p>
                            <p> {review.date}</p>
                        </div>
                    })}

                    <div className="addReview">
                        <Input 
                            type='text'
                            placeholder="Add your own opinions"
                            value={review}
                            onchange={(e)=>setReview(e.target.value)}
                            name='review'
                        />
                        <BtnComponent btnText='Add Review' onClick={addReveiw}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
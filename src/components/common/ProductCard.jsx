import React from 'react'

function ProductCard({btnText,onclick, title, description, price,brand,category,image,rating,stock}) {
  return (
    <>
        <img src={image} alt={image} width='100px'/>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{price}</p>
        <p>{brand}</p>
        <p>{category}</p>
        <p>{rating}</p>
        <p>{stock}</p>

        <button onClick={onclick}>{btnText}</button>
    </>
  )
}

export default ProductCard
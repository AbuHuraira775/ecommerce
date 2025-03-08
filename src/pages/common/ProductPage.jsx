import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/slices/productSlice'
import ProductCard from '../../components/common/ProductCard'
import { Link } from 'react-router-dom'
import Input from '../../components/common/InpComponent'
import { motion } from "framer-motion";
import localData from '../../api/Products.json'
import '../../style/product.css'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { addToFavorite, removeFromFavorite } from '../../redux/slices/wishlistSlice'

function ProductPage() {
    const dispatch = useDispatch()
    const [isFavorite, setIsFavorite] = useState(false)
    const [search, setSearch] = useState('')
    const searchValue = useSelector(state => state.search.search)
    console.log('search from home  ', searchValue)
    const [filterData, setFilterData] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    let products = useSelector(state => state.products.products);
    products = localData.products
    // setFilterData(products)
    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/products`, {
            method: "GET"
        })
        const data = await response.json()
        if (response.ok) {
            dispatch(getProducts(data.products));
            console.log(data.products)
            setFilterData(data.products);
            console.log(data)

        }
    }
    useEffect(() => {
        // fetchData();
        setFilterData(products);
    }, []);

    useEffect(() => {
        setSearch(searchValue)
        if (!searchValue.trim()) {
            setFilterData(products);
            return;
        }
        setFilterData(products.filter(item =>
            item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.category.toLowerCase().includes(searchValue.toLowerCase())
        ));
    }, [searchValue])

    
      const handleFavorite = (product) => {
        setIsFavorite(!isFavorite)
        if (isFavorite) {
          dispatch(removeFromFavorite({ ...product, isFavorite: false }))
        }
        else dispatch(addToFavorite({ ...product, isFavorite: true }))
      }
    
    
    return (
        <div className='products-container container'>
            <div className="body">

                <div className="heading">

                    <h2>Products Available: {filterData.length}</h2>
                </div>

                <div className="product-list">

                    {(!products || products.length === 0) ?
                        <p>Loading...</p> :
                        filterData.map((item, ind) => {
                            return (
                                <ProductCard
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    brand={item.brand}
                                    category={item.category}
                                    image={item.images[0]}
                                    rating={item.rating}
                                    stock={item.stock}
                                    id={item.id}
                                    product={item}
                                    btnText='Add to Cart'
                                    favoriteBtn="Add to Favorite"
                                    // icon={
                                    //     isFavorite ?
                                    //         <HeartFilled className="icon" onClick={() => handleFavorite(item)} />
                                    // :
                                    //         <HeartOutlined className="icon" onClick={() => handleFavorite(item)} />}
                                />
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default ProductPage
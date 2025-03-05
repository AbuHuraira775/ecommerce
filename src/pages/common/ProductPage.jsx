import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/slices/productSlice'
import ProductCard from '../../components/common/ProductCard'
import { Link } from 'react-router-dom'
import Input from '../../components/common/InpComponent'
import { motion } from "framer-motion";
import localData from '../../api/Products.json'

function ProductPage() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([])
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
            console.log(data.response)
        }
    }
    useEffect(() => {
        // fetchData();
        setFilterData(products);
    }, [dispatch]);

    const handleChange = (e) => {
        const value = e.target.value
        setSearch(value)
        if (!value.trim()) { // ✅ Improved: Handles spaces & empty input
            setFilterData(products);
            return;
        }
        setFilterData(products.filter(item =>
            item.description.toLowerCase().includes(value.toLowerCase()) ||
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.category.toLowerCase().includes(value.toLowerCase())
        ));

    }

    return (
        <>
        {filterData.length}
            <Input
                type="text"
                placeholder='Search by name'
                onchange={handleChange}
                name='search'
                calssname={``}
                value={search}
            />
            <h2>{filterData.length}</h2>
            {(!products || products.length === 0) ?
                <p>Loading...</p> :
                filterData.map((item, ind) => {
                    return (
                        <Link key={ind} to={`/product/${item.id}`}>

                            <motion.div
                                className="mr-l  p-4 border-2 bg-red-400 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Product Image */}
                                <motion.img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="w-full  h-40 object-cover rounded-lg"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    width={200}
                                />

                                {/* Product Details */}
                                <h3 className="text-md font-semibold mt-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.category}</p>

                                {/* Price with Appealing UI */}
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xl font-bold text-blue-600">${item.price}</span>
                                    <motion.button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg 
                               hover:bg-blue-600 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => dispatch(addToCart(item))}
                                    >
                                        Add to Cart
                                    </motion.button>
                                </div>
                            </motion.div>

                            <ProductCard
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                brand={item.brand}
                                category={item.category}
                                image={item.images[0]}
                                rating={item.rating}
                                stock={item.stock}
                            />
                        </Link>
                    )
                })

            }
        </>
    )
}

export default ProductPage
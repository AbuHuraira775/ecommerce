import Input from '../../components/common/InpComponent'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../../components/common/ProductCard'
import { getProducts } from '../../redux/slices/productSlice'
import localData from '../../api/Products.json'

function ProductCategoryPage() {
    const dispatch = useDispatch()
    const { category } = useParams()
    let products = useSelector(state => state.products.products);
    // products = localData.products
    const productsByCategory = products.filter(item => item.category?.toLowerCase() === category?.toLowerCase());
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([])

    console.log(category)
    console.log(productsByCategory)

    const fetchData = async () => {
        const response = await fetch(`https://dummyjson.com/products`, {
            method: "GET"
        })
        const data = await response.json()
        if (response.ok) {
            dispatch(getProducts(data.products));
        }
    }
    useEffect(() => {
        // fetchData();
        setFilterData(productsByCategory);

    }, [dispatch]);


    const handleChange = (e) => {
        const value = e.target.value
        setSearch(value)
        if (value == '') setFilterData(productsByCategory)
        else {
            setFilterData(productsByCategory.filter(item => {
                return item.title.toLowerCase().includes(value.toLowerCase()) || item.title.toLowerCase().includes(value.toLowerCase())
            }
            ));
        }
    }

    return (
        <>
        
            <Input
                type="text"
                placeholder='Search by name'
                onchange={handleChange}
                name='search'
                calssname={``}
                value={search}
            />
            <h3>{filterData.length} products</h3>

            {!productsByCategory ?
                <p>Loading...</p> :
                filterData.map((item, ind) => {
                    return (
                        <Link key={ind} to={`/product/${item.id}`}>
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

export default ProductCategoryPage
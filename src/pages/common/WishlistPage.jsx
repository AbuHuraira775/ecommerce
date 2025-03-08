import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/common/ProductCard'
import { HeartFilled } from '@ant-design/icons'
import { addToFavorite, removeFromFavorite } from '../../redux/slices/wishlistSlice';

function WishlistPage() {
  const wishlistProducts = useSelector((state) => state.wishlists.wishlistProducts)
  const searchValue = useSelector(state => state.search.search)
  const dispatch = useDispatch()

  console.log(wishlistProducts)
  const [isFavorite, setIsFavorite] = useState(false)

  const [search, setSearch] = useState('')
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    setSearch(searchValue)
    if (!searchValue.trim()) {
      setFilterData(wishlistProducts);
      return;
    }
    setFilterData(wishlistProducts.filter(item =>
      item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.category.toLowerCase().includes(searchValue.toLowerCase())
    ));
  }, [searchValue, wishlistProducts])


  const handleFavorite = (product) => {
    setIsFavorite(!isFavorite)
    if (isFavorite) {
      dispatch(removeFromFavorite({ ...product, isFavorite: false }))
    }
    else dispatch(addToFavorite({ ...product, isFavorite: true }))
  }

  return (
    <>
      <div className='products-container container'>

        <div className="body">

          <div className="heading">
            <h2>Products Available: {filterData.length}</h2>
          </div>

          <div className="product-list">

            {(!wishlistProducts || wishlistProducts.length === 0) ?
              <p>There is not any favorite products</p> :
              filterData.map((item, ind) => {
                return (

                  <React.Fragment key={ind}>
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
                      isFavoriteItem={true}
                      // icon={
                      //   item.isFavorite ?
                      //     <HeartFilled className="icon" onClick={() => handleFavorite(product)} style={{ color: 'red' }} />
                      //     :
                      //     <HeartOutlined className="icon" onClick={() => handleFavorite(product)} />
                      // }
                    />
                  </React.Fragment>

                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default WishlistPage
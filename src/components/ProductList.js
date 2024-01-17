import React, { useEffect, useState, useContext } from 'react'
import { ProductContext } from './ProductContext'
import { Link } from 'react-router-dom'
import './ProductList.css'

export default function ProductList() {
    const [products, setProducts] = useState([])
    const { setSelectedProduct } = useContext(ProductContext)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products.slice(0,10)))
    }, [])
    return (
        <div className='product_listing_container'>
            <h1>Product Listing Page</h1>
            <div className='product_listing'>
                {
                    products.map((prod) => {
                        return (
                            <Link onClick={() => {setSelectedProduct(prod)}} to="/product">
                                <div className='product_card'>
                                    <img src={prod.thumbnail} />
                                    <h3>{prod.title}</h3>
                                    <p>{prod.description}</p>   
                                    <p>${prod.price}</p>
                                </div> 
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}



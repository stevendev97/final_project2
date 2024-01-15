import React, { useEffect, useState, useContext } from 'react'
import { ProductContext } from './ProductContext'
import { Link } from 'react-router-dom'

export default function ProductList() {
    const [products, setProducts] = useState([])
    const { setSelectedProduct } = useContext(ProductContext)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products.slice(0,10)))
    }, [])
    return (
        <div>
            <h1>Product Listing Page</h1>
            <div>
                {
                    products.map((prod) => {
                        return (
                            <Link onClick={() => {setSelectedProduct(prod)}} to="/product">
                                <div>
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



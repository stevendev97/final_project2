import React, { useContext, useEffect } from 'react'
import { ProductContext } from './ProductContext'
import './Product.css'

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions/cartAction';
import { useNavigate } from "react-router-dom";




export default function Product() {
    const { selectedProduct } = useContext(ProductContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = item => {
        dispatch(addToCart(item));
    };

    useEffect(() => {
        if (!selectedProduct) {
            navigate('/')
        } 
    }, [])

    return (
        <div className='selected_card'>
            <div className='imgs_container'>
                {selectedProduct?.images.map((i, index) => {
                    return <img src={i} key={index} />
                })}
            </div>
            <div className='description_container'>
                <h1>{selectedProduct.title}</h1>
                <p>Rating: {selectedProduct.rating}</p>
                <h2>Brand: {selectedProduct.brand}</h2>
                <p>Category: {selectedProduct.category}</p>
                <p>Only {selectedProduct.stock} Left</p>
                <p>{selectedProduct.description}</p>
                <button onClick={() => handleAddToCart(selectedProduct)}>Add to</button>
            </div>
        </div>
    )
}


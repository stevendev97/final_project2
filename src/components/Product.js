import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions/cartAction';



export default function Product() {
    const { selectedProduct } = useContext(ProductContext)

    const dispatch = useDispatch();

    const handleAddToCart = item => {
        dispatch(addToCart(item));
    };

    return (
        <div>
            <h2>This is Individual Product Page</h2>
            <div>
                <img src={selectedProduct.thumbnail} />
                <h3>{selectedProduct.title}</h3>
                <p>{selectedProduct.description}</p>
                <p>${selectedProduct.price}</p>
                <button onClick={() => handleAddToCart(selectedProduct)}>Add to cart</button>
            </div>
        </div>
    )
}


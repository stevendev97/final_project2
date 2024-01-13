import React from 'react'

export default function Product({ selectedProduct }) {
    return (
        <div>
            <h2>This is Individual Product Page</h2>
            <div>
                <img src={selectedProduct.thumbnail} />
                <h3>{selectedProduct.title}</h3>
                <p>{selectedProduct.description}</p>
                <p>${selectedProduct.price}</p>
            </div>
        </div>
    )
}


import React, { useState ,useEffect } from 'react'
import ProductList from './ProductList'
import Product from './Product'
import { Routes, Route } from 'react-router-dom'

export default function Main() {
    const [selectedProduct, setSelectedProduct] = useState()
    return (
        <div>
            <Routes>
                <Route path='/' element={<ProductList setSelectedProduct={setSelectedProduct} />} />
                <Route path='/product' element={<Product selectedProduct={selectedProduct} />} />
            </Routes>
        </div>
    )
}


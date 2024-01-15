import React, { useState ,useEffect } from 'react'
import ProductList from './ProductList'
import Product from './Product'
import Cart from './cart'

import { Routes, Route } from 'react-router-dom'

export default function Main() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='/product' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    )
}


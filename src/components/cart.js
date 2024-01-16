import React from 'react'
import { useSelector } from 'react-redux';
// import "./Cart.css"


export default function Cart() {
  const items = useSelector(state => state.cart.items);
  //enchance cart state
  //loop through ori cart state from redux
  //find duplicated item
  //add another key and value pair into the item object

  return (
    <div className='cart_wrapper'>
        <h1>You're in cart page</h1>
      {
        items?.map((item) => {
          return (
            <div className='cart_card'>
              <img src={item.thumbnail} />
              <div className='cart_description'>
                <h2>{item.title}</h2>
                <p>Brand: {item.brand}</p>
                <p>Category: {item.category}</p>
                <p>Price: ${item.price}</p>
                <p>{item.description}</p>
                <button>Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}


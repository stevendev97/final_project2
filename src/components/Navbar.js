import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';



export default function Navbar({ isLogin, setIsLogin }) {
    const items = useSelector(state => state.cart.items);

    const handelLogout = () => {
        if (isLogin) {
            setIsLogin(false)
            localStorage.setItem('isLogin', false)
        }
    }
    return (
        <div className='navbar'>
            <Link to='/'><p>Home</p></Link>
            <div className='right_nav'>
                <Link className='cart' to='/cart'>
                    <span>🛒</span>
                    {
                        items.length !== 0 && <span class="cart-number">{items.length}</span>
                    }
                </Link>
                <p onClick={handelLogout}>{isLogin ? 'Logout' : 'Login'}</p>
            </div>
        </div>
    )
}


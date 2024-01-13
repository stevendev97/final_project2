import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar({ isLogin, setIsLogin }) {

    const handelLogout = () => {
        if (isLogin) {
            setIsLogin(false)
        }
    }
    return (
        <div className='navbar'>
            <Link to='/'><p>Home</p></Link>
            <p onClick={handelLogout}>{isLogin ? 'Logout' : 'Login'}</p>
        </div>
    )
}


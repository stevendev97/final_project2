import React, { useState } from 'react'
import './Login.css'

export default function Login({ setIsLogin }) {
    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')

    //mock database 
    const user1 = {
        name: 'steven',
        password: '123'
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        //look into database see if the user name and password match 
        console.log(userName, userPass)
        if (user1.name === userName && user1.password === userPass) {
            console.log('login success')
            setIsLogin(true)
            localStorage.setItem('isLogin', true)
        } else {
            console.log('login failed')
            setIsLogin(false)
        }
    }

  return (
    <div>
        <form className='login_form' onSubmit={handelSubmit}>
            <h2>Login</h2>
            <label className='input_cont'>
                User Name:
                <input value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label className='input_cont'>
                Password:
                <input value={userPass} type='password' onChange={(e) => setUserPass(e.target.value)} />
            </label>
            <button>Login</button>
        </form>
    </div>
  )
}



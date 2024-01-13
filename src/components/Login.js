import React, { useState } from 'react'

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
        } else {
            console.log('login failed')
            setIsLogin(false)
        }
    }

  return (
    <div>
        <form onSubmit={handelSubmit}>
            <h1>Login</h1>
            <label>User Name</label>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} />
            <label>Password</label>
            <input value={userPass} type='password' onChange={(e) => setUserPass(e.target.value)} />
            <button>Login</button>
        </form>
    </div>
  )
}



import React,{ useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Main from './components/Main';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductContext } from './components/ProductContext';


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState()

  useEffect(() => {
    if (localStorage.getItem('isLogin') === 'true') {
      setIsLogin(true)
    } 
  },[])

  const basename = process.env.NODE_ENV === 'production' ? '/final_project' : '';


  return (
    <Router basename={basename}>
      <ProductContext.Provider value={{selectedProduct, setSelectedProduct }}>
        <div>
          <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
          {
            isLogin ? <Main /> : <Login setIsLogin={setIsLogin} />
          }
        </div>
      </ProductContext.Provider>
    </Router>
  );
}

export default App;

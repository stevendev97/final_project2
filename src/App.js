import React,{ useState } from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Main from './components/Main';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <Router>
      <div>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        {
          isLogin ? <Main /> : <Login setIsLogin={setIsLogin} />
        }
      </div>
    </Router>
  );
}

export default App;

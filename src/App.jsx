import React, { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Components/Login/Login'
import Footer from './Components/Common/Footer/Footer'
import BottomNav from './Components/Common/Navbar/BottomNav'

const App = () => {

  const [ShowLogin, setShowLogin] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className='App'>
      {ShowLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
      <Home setShowLogin={setShowLogin} setSidebar={setSidebar} sidebar={sidebar}/>
      <BottomNav />
      <Footer/>      
    </div>
  )
}

export default App

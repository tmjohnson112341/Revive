import React from 'react'
import Navbar from "./Navbar";
import Home from "./Home"


const Layout = () => {
  return (
    <div className='layout'>
    <div class='background-animate'>
      <Navbar />
    </div>
    <div>
      <Home />
    </div>
    </div>
  )
}

export default Layout
import React from 'react'
import logoImage from "../images/logo.png"
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 " >
      <img src={logoImage} alt='logo' className='w-44 cursor-pointer'></img>
    </div>
  )
}

export default Header
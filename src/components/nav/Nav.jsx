import React, { useState } from 'react'
import './nav.css'
import { BiHome, BiUser, BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
// import { VscFeedback } from 'react-icons/vsc'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' title='Home' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <BiHome />
      </a>
      <a href='#about' title='About Me' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <BiUser />
      </a>
      <a href='#experience' title='Experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      {/* <a href='#services' title='Services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a> */}
      <a href='#portfolio'  title='Portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <AiOutlineFundProjectionScreen />
      </a>
      <a href='#contact' title='Contact Me' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav
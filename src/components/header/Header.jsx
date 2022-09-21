import React from 'react'
import './header.css'
// import CTA from './CTA'
// import Me from '../../assets/me.png'
// import HeaderSocials from './HeaderSocials'
// import {FaLongArrowAltRight} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anas Abuobaid</h1>
        
        <h5 className='text-light'>Junior Fullstack Developer</h5>
        {/* <CTA /> */}
        {/* <HeaderSocials /> */}
        {/* <div className="me">
          <img src={Me} alt='' />
        </div> */}
        {/* <a href='#contact' className='scroll__down'>Scroll Down <br/> <FaLongArrowAltRight/></a> */}
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './footer.css'
import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (

    <footer>
      <a href="#" className='footer__logo'>Anas</a>
      <ul className='permalinks'>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          {/* <a href="#services">Services</a> */}
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {/* <a href="#testimonials">Testimonials</a> */}
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/anas-abuobaid/"><BsLinkedin/></a>
        <a href="https://github.com/abuobaid9"><BsGithub/></a>
        <a href='https://api.whatsapp.com/send?phone=962787810864' rel="noreferrer" target="_blank"><BsWhatsapp/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;2022 ANAS <br/>All rights reserved.</small>
      </div>
    </footer>

  )
}

export default Footer
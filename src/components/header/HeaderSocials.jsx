import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'
const HeaderSocials = () => {
    return (
        <div className='header__socials'>

            <a href='https://www.linkedin.com/in/anas-abuobaid' rel="noreferrer" target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/abuobaid9' target=' rel="noreferrer"_blank'><BsGithub /></a>

            <a href='portfolio' target='_blank'><BsDribbble /></a>

        </div>
    )
}

export default HeaderSocials
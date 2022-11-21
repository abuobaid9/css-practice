import React from 'react'
import './about.css';
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
// import {FiUsers}from 'react-icons/fi'
import { VscLibrary } from 'react-icons/vsc'
import { RiMessengerLine } from 'react-icons/ri'
import Cv from '../../assets/AnasAbuobaidCv.pdf'


const About = () => {
  return (
    <section id='about'>
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="abour__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <a href="#experience" >

              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                {/* <small>+3 Years Working</small> */}
              </article>
            </a>
            <a href="#portfolio" >
              <article className='about__card'>
                <VscLibrary className='about__icon' />
                <h5>Projects</h5>
                {/* <small>+200 Worldwide</small> */}
              </article>
            </a>
            <a href="#contact" >
              <article className='about__card'>
                <RiMessengerLine className='about__icon' />
                <h5>Contact</h5>
                {/* <small>+80 Completed </small> */}
              </article>
            </a>
          </div>
          <p>I'm a Junior Full-Stack Developer with
            over 6 months of experience in the
            field. Focused on building websites
            using the newest technologies &
            tools.

          </p>
          {/* <a href="#contact" className='btn btn-primary'> Let's Talk</a> */}
          <div className='cta'>
            <a href={Cv} download className='btn'>Download Cv</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
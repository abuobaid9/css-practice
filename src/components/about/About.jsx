import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward}from 'react-icons/fa'
import {FiUsers}from 'react-icons/fi'
import {VscLibrary}from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'> 
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
      <div className="about__me">
        <div className="abour__me-image">
          <img src={ME} alt="AboutImage"/>
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>+3 Years Working</small>
          </article>
          <article className='about__card'>
          <FiUsers className='about__icon'/>
            <h5>Clinets</h5>
            <small>+200 Worldwide</small>
          </article>
          <article className='about__card'>
            <VscLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>+80 Completed </small>
          </article>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eligendi at fugit. Possimus officia nulla 
          soluta explicabo quis, ullam deserunt fuga laboriosam eius magni minima veritatis ut harum nam hic.
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About
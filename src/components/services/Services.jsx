import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (

    <section id='services'>
      <h5>What I oFFER</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* Ui/Ux */}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* Content  Cretion*/}
        <article className='service'>
          <div className="service__head">
            <h3>Content  Cretion</h3>
          </div>
          <ul className='service__list'>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li><BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>

          </ul>
        </article>
      </div>
    </section>

  )
}

export default Services
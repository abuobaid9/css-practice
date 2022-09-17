import React from 'react';
import "./experience.css"
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (

    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Skills & Experiences</h2>
      <div className="container experience__container">
        {/*  ===================== Frontend ================= */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article
              className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>JavaSccrpit</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>Git/Github</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>ReduxJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*  ===================== Backend ================= */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>REST APIs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>Sequelize.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>SQL Databases</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>Socket.io</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>postgres</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
             <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>Authentication / Authorization</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
             <article className='experience__details'>
              <BsFillPatchCheckFill  className='experience__detalis-icon'/>
              <div>
                <h4>Jest</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
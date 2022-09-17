import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg';
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVATAR1,
    name: "anas",
review:'Lorem ipsum dolor sit amet, consectetur adipisicing elitAlias dolores natus cum ipsam ducimus repudiandae fugiat, quae ab libero. Hic veritatis inventore tenetur doloremque assumenda atque, blanditiis minus perspiciatis aperiam?'

  },
  {
    avatar:AVATAR2,
    name: "ahmad",
review:'Lorem ipsum dolor sit amet, consectetur adipisicing elitAlias dolores natus cum ipsam ducimus repudiandae fugiat, quae ab libero. Hic veritatis inventore tenetur doloremque assumenda atque, blanditiis minus perspiciatis aperiam?'

  },
  {
    avatar:AVATAR3,
    name: "jamal",
review:'Lorem ipsum dolor sit amet, consectetur adipisicing elitAlias dolores natus cum ipsam ducimus repudiandae fugiat, quae ab libero. Hic veritatis inventore tenetur doloremque assumenda atque, blanditiis minus perspiciatis aperiam?'

  },
  {
    avatar:AVATAR4,
    name: "abuobaid",
review:'Lorem ipsum dolor sit amet, consectetur adipisicing elitAlias dolores natus cum ipsam ducimus repudiandae fugiat, quae ab libero. Hic veritatis inventore tenetur doloremque assumenda atque, blanditiis minus perspiciatis aperiam?'

  },
]

const Testimonials = () => {
  return (

    <section id='testimonials'> 
    <h5>Review </h5>
    <h2>Testimonials</h2>
    <Swiper  className="container testimonials__container"
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}
     >
     {data.map((data,index)=>{
return(
  <SwiperSlide key={index} className='testimonial'>
  <div className="client__avatar">
    <img src={data.avatar} alt=" Avatar One" />
  </div>
  <h5 className='clinet__name'>{data.name} </h5>
    <small className='clinet__rewiew'>
      {data.review}
    </small>
</SwiperSlide>
)
     })}
    </Swiper>
      </section>
    
  )
}

export default Testimonials
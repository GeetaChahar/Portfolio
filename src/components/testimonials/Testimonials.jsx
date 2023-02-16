import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Ipshita',
        review: 'Your designs are good and upgrading day by day. Very easy to understand where we have to click and select. Mainly styling is great and also the color combo used by you is best.'
    },
    {
        avatar: AVTR2,
        name: 'Gauri',
        review: 'Those web-pages build using HTML5, CSS3 and JavaScript are too compatible to pages built in ReactJs your selective styles are good, your progress is very fast, keep it up. '
    },
    {
        avatar: AVTR3,
        name: 'Nisha',
        review: 'The way you manage page with JSX is looking easy and inspire me to learn for the same, can you add more good projects built with ReactJs so that we can get an idea of updating ours.'
    },
    {
        avatar: AVTR4,
        name: 'Saloni',
        review: 'When I used your weather-app it seems like we can fatch data though api is easy and I have decided to build my own live weather-app working on mobile with different view.'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Peoples</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials_container'

                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client_avatar'>
                                    <img src={avatar} />
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials

import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/ChickenGod/chicken1.png'
import IMG2 from '../../assets/ChickenGod/chicken2.png'
import IMG3 from '../../assets/ChickenGod/chicken3.png'
import IMG4 from '../../assets/ChickenGod/chicken4.png'
import IMG5 from '../../assets/Evade/evade1.png'
import IMG6 from '../../assets/Evade/evade2.png'
import IMG7 from '../../assets/LetsLearnMath/let_math1.png'
import IMG8 from '../../assets/LetsLearnMath/let_math2.png'
import IMG9 from '../../assets/LetsLearnMath/let_math3.png'
import IMG10 from '../../assets/LetsLearnMath/let_math4.png'




// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Chicken God - Mobile',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Chicken God - Mobile',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Chicken God - Mobile',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Chicken God - Mobile',
    demo: 'https://dribble.com'
  },
]
const data2 = [
  {
    id: 1,
    image: IMG5,
    title: 'Evade - Mobile',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG6,
    title: 'Evade - Mobile',
    demo: 'https://dribble.com'
  },
]
const data3 = [
  {
    id: 1,
    image: IMG7,
    title: 'Let\'s Match Series - Mobile/Tablet',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG8,
    title: 'Let\'s Match Series - Mobile/Tablet',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG9,
    title: 'Let\'s Match Series - Mobile/Tablet',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG10,
    title: 'Let\'s Match Series - Mobile/Tablet',
    demo: 'https://dribble.com'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Game Design/Development</h2>
      <div className='portfolio__container'>
      <Swiper className='container'
       modules={[ Pagination ]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data.map(({id, image, title, demo}) => {
            return (
              <SwiperSlide key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} /> 
                </div>
                <h3>{title}</h3>
              </SwiperSlide>   
            )
          })
        } 
      </Swiper>
      <Swiper className='container'
       modules={[ Pagination ]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data2.map(({id, image, title, demo}) => {
            return (
              <SwiperSlide key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} /> 
                </div>
                <h3>{title}</h3>
              </SwiperSlide>   
            )
          })
        } 
      </Swiper>
      <Swiper className='container'
       modules={[ Pagination ]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data3.map(({id, image, title, demo}) => {
            return (
              <SwiperSlide key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} /> 
                </div>
                <h3>{title}</h3>
              </SwiperSlide>   
            )
          })
        } 
      </Swiper>
      </div>
    </section>
  )
}

export default Portfolio
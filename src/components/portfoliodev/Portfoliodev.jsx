import React from 'react'
import './portfoliodev.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio1',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio2',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio3',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio4',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio5',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio6',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
]


const Portfoliodev = () => {
  return (
    <section id="portfolio">
      <h2>Web Development</h2>

      <div className='container portfoliodev__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfoliodev__item'>
                <div className='portfoliodev__item-image'>
                  <img src={image} alt={title} /> 
                </div>
                <h3>{title}</h3>
                <div className='portfoliodev__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>   
            )
          })
        } 

      </div>
    </section>
  )
}

export default Portfoliodev
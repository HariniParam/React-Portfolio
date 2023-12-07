import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jfif'
import IMG2 from '../../assets/portfolio2.jfif'
import IMG3 from '../../assets/portfolio3.jfif'
import IMG4 from '../../assets/portfolio4.jfif'
import IMG5 from '../../assets/portfolio5.jfif'
import IMG6 from '../../assets/portfolio6.jfif'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'One Click Services',
    github: 'https://github.com/HariniParam/One_Click_Services'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Fault Section Location',
    github: 'https://github.com/HariniParam/Fault-Section-Location'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Travel Planner',
    github: 'https://github.com/HariniParam/Travel-Planner'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Network Intrusion Detection',
    github: 'https://github.com/HariniParam/Network-Intrusion-Detection'
  },
  {
    id: 5,
    image: IMG5,
    title: 'File Explorer',
    github: 'https://github.com/HariniParam/File-Explorer'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Shopping Mall Management System',
    github: 'https://github.com/HariniParam/Shopping-mall-Management-System'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id, image, title, github}) => {
          return(
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github} className="btn" target="_blank">Github</a>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio
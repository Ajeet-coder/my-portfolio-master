import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/skypy1.png'
import IMG4 from '../../assets/portfolio4.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Netflix Clone Website',
        github: 'https://github.com/Ajeet-coder/movie-app-master',
        demo: 'https://ajeet-news-netflix.netlify.app/'
    },
    {
        id: 2,
        image: IMG4,
        title: 'Unsplash Clone',
        github: 'https://github.com/Ajeet-coder/unsplash-clone',
        demo: 'https://ajeet-unsplash.netlify.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Skypy',
        github: 'https://github.com/Ajeet-coder/skypey-redux-toolkit',
        demo: 'https://ajeet-skypy.netlify.app/'
    },
    
    
]

const Portfolio = () => {
  return (
      <section id="portfolio">
          <h5>My Reacent Work</h5>
          <h2>Portfolio</h2>

          <div className="container portfolio__container">
              
          {
                  data.map(item => (
                          <article key={item.id} className="portfolio__item">
                              <div className="portfolio__item-image">
                                  <img src={item.image} alt="imageport" />
                              </div>
                          <h3>{ item.title}</h3>
                              <div className="portfolio__item-cta">
                                  <a href={item.github} target='_blank' rel='noreferrer' className='btn'>Github</a>
                                  <a href={item.demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                              </div>
                          </article>
                )
            )      
         }
              
          </div>
    </section>
  )
}

export default Portfolio
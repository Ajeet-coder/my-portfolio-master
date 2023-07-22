import React from 'react'
import './Header.css'
import CTA from './CTA'
import ajeet11 from '../../assets/ajeet11.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
      <header id='header'>
          <div className="container header__container">
              <span>Hey it's</span>
              <h1>Ajeet Kumar</h1>
              <h5 className="text-light">Full Stack Developer</h5>
              <CTA /> 
              <HeaderSocials/>
              
              <div className="me">
                  <img src={ajeet11} alt="my-imge" />
              </div>
              <a href="#contact" className='scroll__down'>Scroll Down</a>
          </div>
    </header>
  )
}

export default Header
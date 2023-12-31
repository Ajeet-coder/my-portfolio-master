import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
      <footer>
          <a href="#header" className='footer__logo'>Ajeet</a>

          <ul className="permalinks">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#myservice">Service</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer__socials">
              <a href="https://www.facebook.com/profile.php?id=100012246338600&mibextid=ZbWKwL" target='_blank' rel='noreferrer'><BsFacebook/></a>
              <a href="https://www.instagram.com/ajeet_404/" target='_blank' rel='noreferrer'><GrInstagram/></a>
              <a href="https://twitter.com/i/flow/login" target='_blank' rel='noreferrer'><AiFillTwitterCircle /></a>
          </div>

          <div className="footer__copyright">
              <small>&copy;Ajeet portfolio:All right reserved.</small>
          </div>
     </footer>
  )
}

export default Footer
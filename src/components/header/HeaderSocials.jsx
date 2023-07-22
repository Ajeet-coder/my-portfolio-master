import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { AiFillPhone } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/ajeet-kumar-b7534418a/" target="_blank" rel='noreferrer'> <AiFillLinkedin /></a>
          <a href="https://github.com/Ajeet-coder" target="_blank" rel='noreferrer'> < FaGithub /></a>
          <a href="mailto:jeet78585@gmail.com" target="_blank" rel='noreferrer'> < TfiEmail /></a>
          <a href="tel:7858826448" target="_blank" rel='noreferrer'> < AiFillPhone /></a>
      </div>
  )
}

export default HeaderSocials
import React from 'react'
//import CV from '../../assets/Resume.pdf'
import CV from '../../assets/Ajeet_Kumar_Java_Full_Stack_Developer1.pdf'

const CTA = () => {
  return (
      <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
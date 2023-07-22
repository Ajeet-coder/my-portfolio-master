import React , {useRef} from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import CTA from '../header/CTA'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);

        emailjs.sendForm('service_pt8q76l', 'template_j0280so', form.current, 'kV_DDywh1OvbwDtl4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        
    };
  return (
      <section id='contact'>
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          <div className="container contact__container">
              
              <div className="contact__options">
                <CTA/>
                  <article className="contact__option">
                      <AiOutlineMail className='contact_icon'/>
                   <h4>Email</h4>
                      <h5>jeet78585@gmail.com</h5>
                      <a href="mailto:jeet78585@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
                  </article> 
                  <article className="contact__option">
                      <BsWhatsapp className='contact_icon' />
                   <h4>WhatsApp</h4>
                      <h5>+917858826448</h5>
                      <a href="https://api.whatsapp.com/send?phone=+917858826448" target='_blank' rel='noreferrer'>Send a message</a>
                  </article> 
              </div>
              {/* end of contact option  */}
              <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name='user_name' placeholder='Your Full Name' required />
                  <input type="email" name='user_email' placeholder='Your Email' required />
                  <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                  <button type="submit" className='btn btn-primary'>Send Message</button>
              </form>

          </div>
    </section>
  )
}

export default Contact
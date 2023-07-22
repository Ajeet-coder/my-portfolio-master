import React from "react";
import "./About.css";
//import ME from '../../assets/myself.jpg'
import ME from "../../assets/ajeet21.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="my--img" />
          </div>
        </div>

        <div className="about__content">
          <h3>Hey it's</h3>
          <h1>Ajeet Kumar</h1>
        <p className="about_myself">
        I'm a passionate and experienced full stack developer
         with expertise in a wide range of technologies. With 
         a focus on Java Spring Boot, Hibernate, and Microservices
          on the back end, and ReactJS, Redux, NextJS, HTML, and Tailwind
           CSS on the front end, I bring a comprehensive skill set to every
            project I undertake.On the front end, I specialize in crafting interactive and
             intuitive user interfaces using ReactJS. By combining the power of Redux, 
             I ensure smooth state management and a seamless user experience. With Server Component, 
             I optimize performance and build server-side rendering applications.
              I believe that great design is essential, and that's where my expertise in HTML and Tailwind CSS comes into play. I create stunning, responsive, and visually appealing interfaces that engage users and enhance their overall experience.
          </p>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <h4>1.5 yrs</h4>
             
            </article>
            <article className="about__card">
              <AiOutlineUsergroupAdd className="about__icon" />
              <h5>Highest Qualification</h5>
              <small>MCA (CDAC)</small>
            </article>
            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Project</h5>
              <small>20+ compleated</small>
            </article>
          </div>
        
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

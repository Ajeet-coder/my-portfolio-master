import React from 'react'
import './Myservice.css'
import { BsCheck } from 'react-icons/bs'

const Myservice = () => {
    return (
        <section id="myservice">
            <h5>Work Exprience</h5>
            <h2>Services</h2>

            <div className="container service__container">
                {/* UI/UX Design  */}
                <article className="service">
                    <div className="service__head">
                        <h2 className='favs'>Full Stack developer</h2>
                        <h4 className='favs'>Nagarro (July 20022-present)</h4>
                        
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Developed REST API’s and implemented payment gateway system using Spring Boot</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Worked with architect to Design and develop scalable Backend systems using Spring Boot .</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Coded Solutions and unit test with Junit to deliver requirements/stories per defined acceptance criteria and 
compliance requirements.</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Design components, templates, dialog, using the AEM architecture (Sling,Servlet, CRX, OSGI, JCR)
</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Researched and evaluated methods and techniques in development lifecycle, documenting and present 
reports to leadership 2 times a months</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Evaluate user requirements in collaboration</p>
                        </li>
                    </ul>
                </article>
                {/* WEB DEVELOPEMENT  */}
                <article className="service">
                    <div className="service__head">
                        <h2 className='favs'>Software Engineer Trainee</h2>
                        <h4 className='favs'>Nagarro (Jan 2022-Jun 2022)</h4>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Analyzed and maintained existing software applications</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Learned developed and implemented microservices with spring boot framework.</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Designed responsive single-page web applications with ReactJS and Redux.
</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Used 80% relational databases, 20% NO-SQL databases and ORM tools like Hibernate</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Well Knowledge of MYSQL and MongoDB database</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Having an Idea about How i Design a FullStack WEB</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Troubleshooting problems with performance or user experience.</p>
                        </li>
                    </ul>
                </article>
                {/* CONTENT CREATION  */}
                <article className="service">
                    <div className="service__head">
                        <h2 className='favs'>Contact Creation</h2>
                        <h4 className='favs'>Freelancer</h4>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Blogs:high-quality, and well-written pieces about topics</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>CaseStudio:Case studies are a good way of making issues relatable</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Listicles:List articles may seem somewhat gimmicky</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Ebook:type of long-form content, and as the name suggests,</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p> Knowledge of most popular types of content</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Gather and evaluate user requirements in collaboration</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
  )
}

export default Myservice
import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { PiStudentBold } from "react-icons/pi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <PiStudentBold className='about__icon'/>
              <h5>Student</h5>
              <small>3rd Year M.sc Theoretical Computer Science at PSG College of Technology</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            Hey there! I'm Harini, a dedicated and passionate individual deeply enthusiastic about frontend web development.
            My dedication to learning fuels my continuous exploration of new technologies and design trends within web development and design.
            Proficient in HTML, CSS, and JavaScript, I specialize in creating engaging and responsive user interfaces. 
            I'm deeply intrigued by the fusion of technology and creativity, exploring the design aspects of frontend development to craft intuitive and visually appealing web experiences.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
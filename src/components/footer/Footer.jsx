import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Harini</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/harinip3007/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/HariniParam" target="_blank"><FaGithub /></a>
        <a href='https://www.instagram.com/hariniii.___/?hl=en' target="_blank"><FaInstagram /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; HariniParam</small>
      </div>
    </footer>
  )
}

export default Footer
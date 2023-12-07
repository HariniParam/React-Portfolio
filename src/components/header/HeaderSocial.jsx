import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/harinip3007/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/HariniParam" target="_blank"><FaGithub /></a>
      <a href="https://www.instagram.com/hariniii.___/?hl=en" target="_blank"><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocial
import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="www.linkedin.com/in/harinip3007" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/HariniParam" target="_blank"><FaGithub /></a>
      <a href="https://leetcode.com/Harini_hp/" target="_blank"><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocial
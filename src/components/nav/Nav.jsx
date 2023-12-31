import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaAward } from 'react-icons/fa'
import { BiMessageSquareDetail } from "react-icons/bi"
import { GrProjects } from "react-icons/gr";
import { useState } from 'react';

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#');
  return (
   <nav>
    <a href="#" onClick={()=>setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
    <a href="#skills" onClick={()=>setActiveNav('#skills')} className={ activeNav === '#skills' ? 'active' : ''}><FaAward /></a>
    <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active' : ''}><GrProjects /></a>
    <a href="#contact"onClick={()=>setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
   </nav>
  )
}

export default Nav
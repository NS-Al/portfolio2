import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/allennsohn/'><BsLinkedin /></a>
        <a href='https://github.com/NS-Al'><FaGithub /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Nurihan Sohn All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
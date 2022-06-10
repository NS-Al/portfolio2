import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import ME2 from '../../assets/me_about.jpg'
import {BsAward} from 'react-icons/bs'
import HeaderSocial from '../header/HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Nurihan (Allen) Sohn</h1>
        <h3 className="text-light">Designer / Developer</h3>
      </div>
      <div id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <div className="about__me-image-front">
              <img src={ME} alt="About Me"/>
            </div>
            <div className="about__me-image-back">
              <img src={ME2} alt="About Me"/>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years<br/>Web Developing</small>
            </article>

            <article className="about__card">
              <BsAward className="about__icon"/>
              <h5>Experience</h5>
              <small>5+ Years<br/>Mobile Game Developing</small>
            </article>

            <article className="about__card">
              <BsAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years<br/>Digital Artist</small>
            </article>
          </div>

          <p>
          A dynamic interactive media and web developer with a strong record of achievement combining skills in diverse areas of organizational development.<br/>
          Well... actually, I just love developing all sorts of things.
          </p>
          <CTA />
          <HeaderSocial />

          <a href="#contact" className="scroll__down">Scroll Down</a>

      
        </div>
      </div>
      </div>
  
    </header>
  )
}

export default Header
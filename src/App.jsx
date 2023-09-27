import { useState } from 'react'
import LogoP from './Img/LogoP.png'
import InstaLogo from './Img/InstagramIcon.png'
import FbLogo from './Img/FacebookIcon.png'
import GitHubLogo from './Img/GithubIcon.png'
import AboutImg from './Img/AboutImg.png'
import htmlLogo from './Img/htmlLogo.png'
import cssLogo from './Img/cssLogo.png'
import JavaScriptLogo from './Img/JavaScriptLogo.png'
import ReactLogo from './Img/ReactLogo.png'
import NodeJSLogo from './Img/NodeJSLogo.png'
import GithubLogo from './Img/GithubLogo.png'

import './App.css'

function App() {
  const an = new Date()

  return (
    <>
      <article className="Hero">
        <div className="navBar">
          <div className="navBarLeft">
            <img src={LogoP} alt="Logo" className='Logo'/>
            <p>Marian</p>
          </div>
          <div className="navBarRight">
            <a href="#About">ABOUT</a>
            <a href="#WhatIKnow">WHAT I KNOW</a>
            <a href="#Portfolio">WORK</a>
            <a href="#Contact">CONTACT</a>
          </div>
        </div>
        <div className="Header">
          <p className="NumeleMeu">
            I'm Marian Pantazica
          </p>
          <h1>Front-End Developer</h1>
          <div className="SocialContainer">
            <a href="#"><img src={InstaLogo} alt="Instagram Link" /></a>
            <a href="#"><img src={FbLogo} alt="Facebook Link" /></a>
            <a href="#"><img src={GitHubLogo} alt="GitHub Link" /></a>
            
            
            
          </div>
        </div>
      </article>
      <article id="About">
        <div className="AboutImageContainer">
          <img src={AboutImg} alt="Office image" className='AboutImage'/>
        </div>
        <div className="AboutDescContainer">
          <h2 className="blueText overHead">
            About Me
          </h2>
          <h2 className="AboutName">
            I'm Marian Pantazica
          </h2>
          <p className="AboutDesc">
          As a Junior Front-End Developer, I possess an impressive arsenal of skills <br />
           in HTML, CSS, JavaScript, React, and SCSS. I excel in designing <br />
           and maintaining responsive websites that offer a smooth user experience. <br />
           My expertise lies in crafting dynamic, engaging interfaces through writing <br />
           clean and optimized code and utilizing cutting-edge development tools and <br />
           techniques.
          </p>
        </div>
      </article>
      <article id="WhatIKnow">
        <div className="Head">
          <h2 className="blueText overHead">
            What I Know
          </h2>
        </div>
        <div className="SkillContainer">
          <div className="skillItem">
            <img src={htmlLogo} alt="HTML Logo" height='50px' width="50px" />
            <p className='ItemDesc'>HTML</p>
          </div>
          <div className="skillItem">
            <img src={cssLogo} alt="CSS Logo" height='50px' width="50px" />
            <p className='ItemDesc'>CSS</p>
          </div>
          <div className="skillItem">
            <img src={JavaScriptLogo} alt="Javascript Logo" height='50px' width="50px" />
            <p className='ItemDesc'>JavaScript</p>
          </div>
          <div className="skillItem">
            <img src={ReactLogo} alt="React Logo" height='50px' width="50px" className='ReactLogo'/>
            <p className='ItemDesc'>React</p>
          </div>
          <div className="skillItem">
            <img src={NodeJSLogo} alt="NodeJs Logo" height='50px' width="50px"/>
            <p className='ItemDesc'>NodeJS</p>
          </div>
          <div className="skillItem">
            <img src={GithubLogo} alt="Git Hub Logo" height='50px' width="50px" />
            <p className='ItemDesc'>GitHub</p>
          </div>
        </div>
      </article>
      <article id="Portfolio">
        <div className="PortfolioHead">
          <h2 className="blueText overHead">
            Portfolio
          </h2>
          <h2 className="portfolioHead">
            Latest Projects
          </h2>
        </div>
        <div className="ProjectContainer">
          <div className="projectItem">

          </div>
        </div>
      </article>
      <article className="Contact" id='Contact'>
        <div className="contactContainer">
          <h2 className="contactHeader">
            Have any project in mind?
          </h2>
          <button className="contactButton">
            Contact me
          </button>
        </div>
      </article>
      <article className="footer">
        <footer className="FooterContainer">
          <img src={LogoP} alt="Logo" />
          <p className="footerCopyright">
            COPYRIGHT © {an.getFullYear()} PANTAZICA MARIAN. 
          </p>
        </footer>
      </article>
    </>
  )
}

export default App

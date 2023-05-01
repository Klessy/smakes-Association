import React from 'react';
import {HiDownload} from "react-icons/hi";
import AboutImage from '../assets/about-1.jpg';
import AboutImage_2 from '../assets/about-2.jpg';
import Card from './Card';
import {aboutData} from '../data';

const About = () => {
  return (
    <section id="about" data-aos = "fade-in">
       <div className="container about__container">
        <div className="about__left">
          <div className="about-img">
            <img src={AboutImage} alt = "About Pic"/>
            <img src={AboutImage_2} alt = "About Pic"/>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <h1>A Creative Architecture Agency For Your Dream Home</h1>
          <div className="about__cards">
            {
              aboutData.map(item => (
                <Card key={item.id} className = "about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p className="font__raleway">
            Building projects my clients love have always been my passion.
            Being in the web development industry for over 3 years and serving 
            more than 70 happy clients worldwide, I'm motivated to do more!
          </p>
          <p className="font__raleway">
            Hi, my name is Precious Eruteya from Nigeria. I'm a Full Stack web developer
            with a Bachelors degree in Computer Science. My top priority is to get your 
            business online the right way, giving you industry-standard design and all the 
            functionality you need to operate smoothly online. Get in touch today with the
            details of your project let's get started! Check out my resume below!
          </p>
          <div className="come-down"><a href="/" className="btn_main abt-btn">Download CV <HiDownload /></a></div>
        </div>
       </div>
    </section>
  )
}

export default About
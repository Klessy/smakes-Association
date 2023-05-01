import { useState } from 'react';

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { dataSlider } from '../data';

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(1);


  
  return (
    <div className='slide-container'>
      <Fade>
        {
          dataSlider.map((carousels, index) => {
            const { id, title, desc, img, btn} = carousels;
           return(
            <div className = "slide" key={id} >
               <img src={img} alt={title} />
               <div className='inner-carousel'>
                <div className="hero-con container">
                  <h1 className='font__header'>{title}</h1>
                  <p className='font__main'>{desc}</p>
                  <button className='btn_main'>{btn}</button>
                </div>
               </div>
            </div>
           )
          })
        }
      </Fade>
    </div>
  )
}

export default Hero
import { useState } from 'react';
import dataSlider from '../data';


const ImgSlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    
    const slideImg = (index) => {
        setSlideIndex(index);
    }
    

  return (

    <div className='owl-dots'>   
        {
            dataSlider.map((item, index) => {
               
                const { img } = item;
                return(
                    <div 
                    className = {slideIndex === index + 1 ? "owl-dot active" : "owl-dot"}
                    onClick = {() => slideImg(index + 1)}
                    >
                        <img src={img} alt="" />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ImgSlider
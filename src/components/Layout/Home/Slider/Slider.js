import React from 'react'
import slide1 from '../../../../assets/images/slide1.jpg'
import slide2 from '../../../../assets/images/slide2.jpg'
import slide3 from '../../../../assets/images/slide3.jpg'
import slide4 from '../../../../assets/images/slide4.jpg'

import './slider.css'
const Slider = () => {
    return (
        <div id="slider" className="slider">
            <figure>
                <img src={slide1} />
                <img src={slide2} />
                <img src={slide3} />
                <img src={slide4} />
            </figure>
        </div>
    )
}

export default Slider

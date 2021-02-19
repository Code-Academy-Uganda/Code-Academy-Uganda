import React from 'react'
import banner from '../../../../assets/images/banner.jpg'

import './slider.css'
const Slider = () => {
    return (
        <div id="slider" className="slider">
            <figure>
                <img src={banner} />
                <img src={banner} />
                <img src={banner} />
                <img src={banner} />
            </figure>
        </div>
    )
}

export default Slider

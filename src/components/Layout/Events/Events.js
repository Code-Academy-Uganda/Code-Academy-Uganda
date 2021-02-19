import React from 'react'
import Navbar from '../../Navigation/Navbar'
import Footer from '../Home/Footer'
import Banner from '../Home/Banner'
import proj1 from '../../../assets/images/proj1.JPG'
import proj2 from '../../../assets/images/proj2.JPG'
import proj3 from '../../../assets/images/proj3.JPG'
import proj4 from '../../../assets/images/proj4.JPG'


import './Events.scss'
const Events = () => {

    return (
        <div>
            <Navbar />
            <Banner />
            <div className="events-main">
                <h2>Upcoming Events</h2>
                <div className="events-row">
                    <img src={proj1} />
                    <div className="description">
                        <h3>Code School</h3>
                        <p>Teach physical computing through free play with PictoBlox - our Scratch blocks-based graphical programming platform available both for desktop and mobile, and Dabble - our ingeniously developed project-making application that transforms Smartphones into numerous virtual shields.</p>
                        <button>Attend</button>
                    </div>
                </div>
                <div className="events-row">
                    <div className="description2">
                        <h3>Code School</h3>
                        <p>Teach physical computing through free play with PictoBlox - our Scratch blocks-based graphical programming platform available both for desktop and mobile, and Dabble - our ingeniously developed project-making application that transforms Smartphones into numerous virtual shields.</p>
                        <button>Attend</button>
                    </div>
                    <img src={proj2} />
                </div>
                <div className="events-row">
                    <img src={proj3} />
                    <div className="description">
                        <h3>Code School</h3>
                        <p>Teach physical computing through free play with PictoBlox - our Scratch blocks-based graphical programming platform available both for desktop and mobile, and Dabble - our ingeniously developed project-making application that transforms Smartphones into numerous virtual shields.</p>
                        <button>Attend</button>
                    </div>
                </div>
                <div className="events-row">
                    <div className="description2">
                        <h3>Code School</h3>
                        <p>Teach physical computing through free play with PictoBlox - our Scratch blocks-based graphical programming platform available both for desktop and mobile, and Dabble - our ingeniously developed project-making application that transforms Smartphones into numerous virtual shields.</p>
                        <button>Attend</button>
                    </div>
                    <img src={proj4} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Events

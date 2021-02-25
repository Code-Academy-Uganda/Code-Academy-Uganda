import React, { useState } from 'react'
import Navbar from '../../Navigation/Navbar'
import Slider from '../Home/Slider/Slider'
import Services from './Services'
import Reviews from './Reviews'
// import Reviews from './Slider/Review/Reviews'
import Footer from './Footer'
import Banner from './Banner'

import './HomeStyles.scss'
const Home = (props) => {

    const coursesNavigationHandler = () => {
        props.history.push('/courses')
    }

    const teamNavigationHandler = () => {
        props.history.push('/team')
    }

    const projectsNavigationHandler = () => {
        props.history.push('/projects')
    }

    const eventsNavigationHandler = () => {
        props.history.push('/events')
    }

    const aboutusNavigationHandler = () => {
        props.history.push('/aboutUs')
    }

    return (
        <div>
            <Navbar />
            <div className="home-main">
                <Slider />
                <Banner />
                <Services />
                <Reviews />
                <div className="sponsers-container">
                    <h1>Partners</h1>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home

import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import './navStyles.scss'
const Navbar = (props) => {

    const [hamburg, setHamburg] = useState(false)

    const homeNavigationHandler = () => {
        props.history.push('/')
    }

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
        <div className="nav-main">
            {hamburg ?
                <div className="dropdown">
                    <h4 onClick={coursesNavigationHandler}>Courses</h4>
                    <h4 onClick={teamNavigationHandler}>Team</h4>
                    <h4 onClick={projectsNavigationHandler}>Programs</h4>
                    <h4 onClick={eventsNavigationHandler}>Events</h4>
                    <h4 onClick={aboutusNavigationHandler}>About Us</h4>
                </div>
                : null
            }
            <div className="nav-bar">
                <div className="logo">
                    <img onClick={homeNavigationHandler} src={logo} />
                </div>
                <div className="links">
                    <h4 onClick={coursesNavigationHandler}>Courses</h4>
                    <h4 onClick={teamNavigationHandler}>Team</h4>
                    <h4 onClick={projectsNavigationHandler}>Programs</h4>
                    <h4 onClick={eventsNavigationHandler}>Events</h4>
                    <h4 onClick={aboutusNavigationHandler}>About Us</h4>
                </div>
                <div className="hamburger">
                    <i onClick={() => setHamburg(true)} class="material-icons">dehaze</i>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)

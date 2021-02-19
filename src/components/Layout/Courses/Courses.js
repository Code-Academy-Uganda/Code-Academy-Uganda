import React from 'react'
import Navbar from '../../Navigation/Navbar'
import Footer from '../Home/Footer'
import Banner from '../Home/Banner'

import './Courses.scss'
const Courses = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="courses-main">
                <h2>Courses Available</h2>
                <div className="courses-row">
                    <div className="courses-card">
                        <img src="https://miro.medium.com/max/1838/1*8KwAD4HheOY1Ti_u7CvNkA.jpeg" />
                        <h4>Machine Learning</h4>
                        <div className="card-text">
                            <p>“Enrolling for the AI course proved to be a great decision. I spend my time learning useful concepts and skills instead of just playing games or watching videos.”</p>
                        </div>
                        <button>Enroll Now</button>
                    </div>
                    <div className="courses-card">
                        <img src="https://miro.medium.com/max/750/1*Ssr9rf0oqbDkAFjBwRVgVA.png" />
                        <h4>Game Developer</h4>
                        <div className="card-text">
                            <p>“Everything from the course material to the teaching process to the assessment system is very good. I would advise more parents to sign up their kids”</p>
                        </div>
                        <button>Enroll Now</button>
                    </div>
                    <div className="courses-card">
                        <img src="https://miro.medium.com/max/750/1*Ssr9rf0oqbDkAFjBwRVgVA.png" />
                        <h4>Game Developer</h4>
                        <div className="card-text">
                            <p>“Everything from the course material to the teaching process to the assessment system is very good. I would advise more parents to sign up their kids”</p>
                        </div>
                        <button>Enroll Now</button>
                    </div>
                    <div className="courses-card">
                        <img src="https://miro.medium.com/max/1838/1*8KwAD4HheOY1Ti_u7CvNkA.jpeg" />
                        <h4>Machine Learning</h4>
                        <div className="card-text">
                            <p>“Enrolling for the AI course proved to be a great decision. I spend my time learning useful concepts and skills instead of just playing games or watching videos.”</p>
                        </div>
                        <button>Enroll Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Courses

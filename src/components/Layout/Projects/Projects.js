import React from 'react'
import Navbar from '../../Navigation/Navbar'
import Footer from '../Home/Footer'
import Banner from '../Home/Banner'
import proj1 from '../../../assets/images/proj1.JPG'
import proj2 from '../../../assets/images/proj2.JPG'
import proj3 from '../../../assets/images/proj3.JPG'
import proj4 from '../../../assets/images/proj4.JPG'
import proj5 from '../../../assets/images/proj5.JPG'
import proj6 from '../../../assets/images/proj6.JPG'

import './Projects.scss'
const Projects = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="projects-main">
                <h2>Our Programs</h2>
                <div className="projects-row">
                    <div className="projects-card">
                        <img src={proj1} />
                        <div className="card-content">
                            <h4>Code School</h4>
                            <p>we extend computer trainings to schools</p>
                        </div>
                    </div>
                    <div className="projects-card">
                        <img src={proj2} />
                        <div className="card-content">
                            <h4>Code School</h4>
                            <p>we extend computer trainings to schools</p>
                        </div>
                    </div>
                    <div className="projects-card">
                        <img src={proj3} />
                        <div className="card-content">
                            <h4>Code School</h4>
                            <p>we extend computer trainings to schools</p>
                        </div>
                    </div>
                    <div className="projects-card">
                        <img src={proj4} />
                        <div className="card-content">
                            <h4>Code School</h4>
                            <p>we extend computer trainings to schools</p>
                        </div>
                    </div>
                    <div className="projects-card">
                        <img src={proj5} />
                        <div className="card-content">
                            <h4>Code School</h4>
                            <p>we extend computer trainings to schools</p>
                        </div>
                    </div>
                    <div className="projects-card">
                        <img src={proj6} />
                        <div className="card-content">
                            <h4>Code School</h4>
                            <p>we extend computer trainings to schools</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects

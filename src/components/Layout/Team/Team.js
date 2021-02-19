import React from 'react'
import Navbar from '../../Navigation/Navbar'
import Footer from '../Home/Footer'
import Banner from '../Home/Banner'

import './Team.scss'
const Team = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="team-main">
                <h2>Meet some of our Team Members</h2>
                <div className="team-inner">
                    <div className="member-card">
                        <div className="card-content">
                            <h3>Code Academy Uganda has given me the opportunity to reach a global audience for my classes that wouldn’t have been possible otherwise.</h3>
                            <div className="card-row">
                                <img src="https://picsum.photos/200" />
                                <div className="text">
                                    <h4>Jewel</h4>
                                    <p>AI Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="member-card">
                        <div className="card-content">
                            <h3>Launching my first course on Code Academy Uganda allowed me to quit my full-time job and start my own company. I went from working 60+ hour weeks to setting my own hours and schedule.</h3>
                            <div className="card-row">
                                <img src="https://picsum.photos/200" />
                                <div className="text">
                                    <h4>Brenda</h4>
                                    <p>Game Developer Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="member-card">
                        <div className="card-content">
                            <h3>There's no greater success on the Code Academy Uganda marketplace than hearing that you've helped a student achieve their goals. Teaching on Udemy has brought me new relationships from wonderful and insatiably curious students.</h3>
                            <div className="card-row">
                                <img src="https://picsum.photos/200" />
                                <div className="text">
                                    <h4>Happiness</h4>
                                    <p>Web Development Instructor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="member-card">
                        <div className="card-content">
                            <h3>There's no greater success on the Code Academy Uganda marketplace than hearing that you've helped a student achieve their goals. Teaching on Udemy has brought me new relationships from wonderful and insatiably curious students.</h3>
                            <div className="card-row">
                                <img src="https://picsum.photos/200" />
                                <div className="text">
                                    <h4>Edward</h4>
                                    <p>Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Team

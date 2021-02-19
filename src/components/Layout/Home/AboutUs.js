import React from 'react'
import logo from '../../../assets/images/logo.png'

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1>Why join Code Academy Uganda</h1>
            <div className="about-us-row">
                <div className="about-us-column">
                    <i class="material-icons">wb_incandescent</i>
                    <h2>INNOVATION</h2>
                    <p>We offer the necessary skills needed for one to start an ICT career right from the basics.</p>
                </div>
                <div className="about-us-column">
                    <i class="material-icons">palette</i>
                    <h2>CREATIVITY</h2>
                    <p>We keep our students in check and direction through out their learning prosess.</p>
                </div>
            </div>
            <div className="about-us-row">
                <div className="about-us-column">
                    <i class="material-icons">thumb_up</i>
                    <h2>EXCELLENCE</h2>
                    <p>We use available technologies in order to boost creativity.</p>
                </div>
                <div className="about-us-column">
                    <i class="material-icons">settings</i>
                    <h2>SERVICE BEYOND SELF</h2>
                    <p>We offer Nationaly recognized certification to all our learners.</p>
                </div>
            </div>
            <div className="mission">
                <div className="mission-row">
                    <img src={logo}/>
                    <div>
                    <div className="goals">
                        <h2>Mission: </h2>
                        <div className="note">
                        <p>
                            To inspire, train & mentor the young generation in computer science knowledge and skills. This is to enable them become key contributors to the national economic development in the near future.
                        </p>
                        </div>
                    </div>
                    <div className="goals">
                    <h2>Vision: </h2>
                        <div className="note">
                        <p>
                        Raising a creative and innovative generation through computer science
                        </p>
                        </div>
                    </div>
                    <div className="goals">
                        <h2>Goals: </h2>
                        <div className="note">
                        <p>
                        <strong style={{fontSize:'25px'}}>•</strong> To inspire all children in schools in Uganda into computer science.<br/>
                        <strong style={{fontSize:'25px'}}>•</strong> To establish a code club in every school in Uganda.<br/>
                        <strong style={{fontSize:'25px'}}>•</strong> To establish a code camp in all the major towns of the country.<br/>
                        <strong style={{fontSize:'25px'}}>•</strong> To create a robust team of young innovators and great thinkers.<br/>
                        <strong style={{fontSize:'25px'}}>•</strong> To be a hub for all software related developments and solution with young and vibrant team.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs

import React from 'react'
import Navbar from '../../Navigation/Navbar'
import Banner from '../Home/Banner'
import Footer from '../Home/Footer'

import './Styles.scss'
const Kid = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <div className="main">
                <h2>Kids Programmes</h2>
                <div className="card-row2">
                    <div className="card">
                        <img src="https://miro.medium.com/max/980/1*qwbgXz6LvxJ7IDvkJIM5oQ.jpeg" />
                        <div className="card-title">
                            <h2>Code Camp</h2>
                        </div>
                        <div className="card-content">
                            <h1>300,000 UGX</h1>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Scratch beginner's class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Scratch intermediate class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Scratch advanced class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Weekend class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Certification</p>
                            </div>
                            <button>Enroll now</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://miro.medium.com/max/980/1*qwbgXz6LvxJ7IDvkJIM5oQ.jpeg" />
                        <div className="card-title">
                            <h2>Code Camp</h2>
                        </div>
                        <div className="card-content">
                            <h1>300,000 UGX</h1>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Scratch beginner's class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Scratch intermediate class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Scratch advanced class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Weekend class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Certification</p>
                            </div>
                            <button>Enroll now</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://miro.medium.com/max/980/1*qwbgXz6LvxJ7IDvkJIM5oQ.jpeg" />
                        <div className="card-title">
                            <h2>Code Camp</h2>
                        </div>
                        <div className="card-content">
                            <h1>300,000 UGX</h1>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Scratch beginner's class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Scratch intermediate class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Scratch advanced class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Weekend class</p>
                            </div>
                            <div className="row">
                                <i class="material-icons">check</i>
                                <p>Certification</p>
                            </div>
                            <button>Enroll now</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Kid

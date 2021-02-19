import React from 'react'
import { withRouter } from 'react-router-dom'

const Services = (props) => {

    const redirectKids = () => {
        props.history.push('/kids')
    }

    const redirectYouth = () => {
        props.history.push('/youth')
    }

    const redirectSoftware = () => {
        props.history.push('/software')
    }

    return (
        <div className="services">
            <h1>Packages</h1>
            <div className="card-row2">
                <div className="card">
                    <img src="https://miro.medium.com/max/980/1*qwbgXz6LvxJ7IDvkJIM5oQ.jpeg" />
                    <div className="card-title">
                        <h2>Kids Programmes</h2>
                    </div>
                    <div className="card-content">
                        <p>Take advantage of our active community of instructors to help you through your course creation process</p>
                        <button onClick={redirectKids}>Explore More</button>
                    </div>
                </div>
                <div className="card">
                    <img src="https://miro.medium.com/max/980/1*qwbgXz6LvxJ7IDvkJIM5oQ.jpeg" />
                    <div className="card-title">
                        <h2>Youth Programmes</h2>
                    </div>
                    <div className="card-content">
                        <p>Take advantage of our active community of instructors to help you through your course creation process</p>
                        <button onClick={redirectYouth}>Explore More</button>
                    </div>
                </div>
                <div className="card">
                    <img src="https://miro.medium.com/max/980/1*qwbgXz6LvxJ7IDvkJIM5oQ.jpeg" />
                    <div className="card-title">
                        <h2>Software Development</h2>
                    </div>
                    <div className="card-content">
                        <p>Take advantage of our active community of instructors to help you through your course creation process</p>
                        <button onClick={redirectSoftware}>Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Services)

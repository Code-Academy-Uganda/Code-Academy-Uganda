import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

import './HomeStyles.scss'
const Banner = (props) => {

    const aboutusNavigationHandler = () => {
        props.history.push('/aboutUs')
    }

    return (
        <div className="about-mini">
            <div className="about-mini-inner">
                <img src={logo} />
                <div>
                    <h3>
                        Code Academy Uganda is a nonprofit organization dedicated to expanding access to computer science knowledge and skills to children going to school in Uganda
                        </h3>
                    <button onClick={aboutusNavigationHandler}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Banner)

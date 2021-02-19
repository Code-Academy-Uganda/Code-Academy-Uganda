import React from 'react'
import kid from '../../../../../assets/images/kid.JPG'
import parent from '../../../../../assets/images/parent.JPG'

const Review = () => {
    return (
        <div className="reviews-card">
            <img src={kid} />
            <p>“Enrolling for the AI course proved to be a great decision. I spend my time learning useful concepts and skills instead of just playing games or watching videos.”</p>
            <h4>Edward Sempala (Student)</h4>
        </div>
    )
}

export default Review

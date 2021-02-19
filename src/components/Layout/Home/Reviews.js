import React from 'react'
import kid from '../../../assets/images/kid.JPG'
import parent from '../../../assets/images/parent.JPG'

const Reviews = () => {
    return (
        <div className="review">
            <h1>Reviews from Students and Parents</h1>
            <div className="reviews-row">
                <div className="reviews-card">
                    <img src={kid} />
                    <p>“Enrolling for the AI course proved to be a great decision. I spend my time learning useful concepts and skills instead of just playing games or watching videos.”</p>
                    <h4>Edward Sempala (Student)</h4>
                </div>
                <div className="reviews-card">
                    <img src={parent} />
                    <p>“Everything from the course material to the teaching process to the assessment system is very good. I would advise more parents to sign up their kids”</p>
                    <h4>Tugume Brenda (Parent)</h4>
                </div>
            </div>
        </div>
    )
}

export default Reviews

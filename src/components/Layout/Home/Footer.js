import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-nav">
                <h4>Courses</h4>
                <div className="separator" />
                <h4>Learn</h4>
                <div className="separator" />
                <h4>Educators</h4>
                <div className="separator" />
                <h4>Projects</h4>
                <div className="separator" />
                <h4>Signup</h4>
            </div>
            <div className="footer-body">
                <div className="body-column">
                    <h3>About Us</h3>
                    <p>
                        We a nonprofit organization
                        dedicated to expanding access to computer science knowledge
                        and skills to children going to school in Uganda
                    </p>
                </div>
                <div className="body-separator" />
                <div className="body-column">
                    <h3>Mission</h3>
                    <p>
                        To inspire, train & mentor the young generation in computer science knowledge and skills.
                        This is to enable them become key contributors to the national economic development in the near future.
                    </p>
                </div>
                <div className="body-separator" />
                <div className="body-column">
                    <h3>Contact</h3>
                    <div className="contact-row">
                        <i class="material-icons">local_phone</i>
                        <p>+256 774 802 292</p>
                    </div>
                    <div className="contact-row">
                        <i class="material-icons">email</i>
                        <a href="mailto:codeacademy.ug@gmail.com">codeacademy.ug@gmail.com</a>
                    </div>

                    <div className="contact-row">
                        <i class="material-icons">location_on</i>
                        <p>Kampala, Uganda</p>
                    </div>
                </div>
            </div>
            <div className="footer-separator" />
            <div className="social-media">
                <div className="email">
                    <h3>Join the Mailing List</h3>
                    <p>Sign up today and get the latest news, product updates, and exclusive newsletter-only offers.</p>
                    <div className="email-row">
                        <input placeholder="Enter Email" />
                        <i class="material-icons">send</i>
                    </div>
                </div>
            </div>
            <div className="social-icons">
                <SocialIcon style={{ height: 40, width: 40 }} url="https://twitter.com/jaketrent" bgColor="#ff5a01" />
                <SocialIcon style={{ height: 40, width: 40 }} url="https://facebook.com" bgColor="#ff5a01" />
            </div>
        </div>
    )
}

export default Footer

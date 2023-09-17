import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


    function Footer() {
    return (
        <footer>
                <div className="container">
                    <div className="row">
                        <div className="footer-info">
                            <div className="location">
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>

                            <div className="web-social">
                                <h3>AROUND THE WEB</h3>

                                <div className="social-media">
                                    <div className="svg-icon">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </div>
                                    <div className="svg-icon">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </div>
                                    <div className="svg-icon">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                    <div className="svg-icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </div>

                                </div>
                                
                            </div>
                            
                            <div className="freelancer">
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-foot">
                    Copyright &copy; Your Website 2021
                </div>
        </footer>
    )
}

export default Footer
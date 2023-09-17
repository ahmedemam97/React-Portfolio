import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        
            <div className="row">
                <div className="about">
                    <div className='third'>
                        <h1>ABOUT COMPONENT</h1>

                        <div className="icon-div">
                            <div className='stick'></div>
                                <FontAwesomeIcon icon={faStar} />
                            <div className='stick'></div>
                        </div>

                        <div className="paragraph">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default About
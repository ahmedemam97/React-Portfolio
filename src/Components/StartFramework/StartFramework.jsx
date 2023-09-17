import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function StartFramework() {
    return (
            <div className="landing">
                <div className="container">
                    <div className="landing-div">
                        <div className="div-land">
                            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="" />
                            <h1>START FRAMEWORK</h1>

                            <div className="icon-div">
                                <div className='stick'></div>
                                <FontAwesomeIcon icon={faStar} />
                                <div className='stick'></div>
                            </div>

                            <p>Graphic Artist - Web Designer - Illustrator</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default StartFramework
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


function Contact() {

    // const [name, setName] = useState('')
    // const [age, setAge] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    return (
        <div className="container">
            <div className="row">
                <div className="contact">
                    <h1>CONATCT SECTION</h1>
                    <div className="icon-div">
                        <div className='stick'></div>
                        <FontAwesomeIcon icon={faStar} />
                        <div className='stick'></div>
                    </div>

                    <div className="form-div">
                        <form action="">
                            {/* <h5>{name}</h5> */}
                            <input type="text" placeholder='userName' />
                            {/* <h5>{age}</h5> */}
                            <input type="text" placeholder='userAge' />
                            {/* <h5>{email}</h5> */}
                            <input type="email" placeholder='userEmail' />
                            {/* <h5>{password}</h5> */}
                            <input type="password" placeholder='userPassword' />

                            <button className='btn'>Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
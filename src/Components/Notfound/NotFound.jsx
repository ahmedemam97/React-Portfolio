import React from 'react'
import notfoundImg from '../../assets/error.svg'
export default function NotFound() {
    return (
        <div className="container">
            <div className="row">
            <div className="not-found text-center">
                <h1>Page Not Found!</h1>
                <img className='mt-4' src={notfoundImg} alt="" />
                </div>
            </div>
        </div>
    )
}

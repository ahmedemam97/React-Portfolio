import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {

    const [scrolling, setScrolling] = useState(false);
    
    
    // const [images, setImgages] = useState('')
    // async function getData() {
    //     let result = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    //     console.log(result.data.data);
    // }

    // useEffect(() => {
    //     getData()
    // })

    useEffect(() => {
        
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <nav className={`navbar navbar-expand-lg ${scrolling ? "scrolling" : ""}`}>
            {console.log('ahmed')}
            <div className="container">
                <NavLink className='home-header' to="home">
                    <h1>START FRAMEWORK</h1>
                </NavLink>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" color='white' ></span>
                </button>

                <div className="links collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="portfolio">Portfolio</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to='contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>

    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //     <div className="container-fluid">
    //         <a className="navbar-brand" href="/">Navbar</a>
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon" />
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //             <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="/">Home</a>
    //             </li>
    //             <li className="nav-item">
    //             <a className="nav-link" href="/">Link</a>
    //             </li>
    //             <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                 Dropdown
    //             </a>
    //             <ul className="dropdown-menu">
    //                 <li><a className="dropdown-item" href="/">Action</a></li>
    //                 <li><a className="dropdown-item" href="/">Another action</a></li>
    //                 <li><hr className="dropdown-divider" /></li>
    //                 <li><a className="dropdown-item" href="/">Something else here</a></li>
    //             </ul>
    //             </li>
    //             <li className="nav-item">
    //             <a className="nav-link disabled" aria-disabled="true">Disabled</a>
    //             </li>
    //         </ul>
    //         <form className="d-flex" role="search">
    //             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //             <button className="btn btn-outline-success" type="submit">Search</button>
    //         </form>
    //         </div>
    //     </div>
    // </nav>

        
    )
}

export default Navbar;
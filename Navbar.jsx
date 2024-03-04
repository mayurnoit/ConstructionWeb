import React from 'react'
import logo from '../images/constructionlogo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
    return (
<>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid justify-content-between">
                <div>
                    <img className='backremove ' src={logo} alt="" height={50} />

                </div>
                <div >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-3">
                                <Link to="/home" className="nav-link text-white fw-bold">Home</Link>
                            </li>
                            <li className="nav-item  mx-3">
                                <Link to="/about" className="nav-link text-white fw-bold hover:text-dark">About</Link>
                            </li>

                            <li className="nav-item  mx-3 dropdown">
                                <Link to="/"className="nav-link dropdown-toggle fw-bold text-white fw-bold" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    We Build
                                </Link>
                                <ul className="dropdown-menu text-white" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Homes</a></li>
                                    <li><a className="dropdown-item" href="#">Hospitals</a></li>
                                    <li><a className="dropdown-item" href="#">Offices</a></li>
                                    <li><a className="dropdown-item" href="#">Schooles & Colleges</a></li>
                                    <li><a className="dropdown-item" href="#">Comercial Buildings</a></li>
                                    <li><a className="dropdown-item" href="#">Residencial Buildings</a></li>

                                </ul>
                            </li>

                            <li className="nav-item  mx-3 dropdown">
                                <a className="nav-link dropdown-toggle text-white fw-bold" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    We Are
                                </a>
                                <ul className="dropdown-menu text-white" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Our Buisnesses</a></li>
                                    <li><a className="dropdown-item" href="#"></a></li>
                                </ul>
                            </li>

                            <li className="nav-item  mx-3 dropdown">
                                <a className="nav-link dropdown-toggle text-white fw-bold" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Careers
                                </a>
                                <ul className="dropdown-menu text-white" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Architecture</a></li>
                                    <li><a className="dropdown-item" href="#">Superviser</a></li>
                                    <li><a Side className="dropdown-item" href="#">Side Enginners</a></li>
                                    <li><a Contractor className="dropdown-item" href="#">Contractor</a></li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>


                <div>
                    <button type="button" className="btn btn-primary">Login</button>
                </div>
            </div>
        </nav>
        </>
    )
}

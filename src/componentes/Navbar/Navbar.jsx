import React from 'react'
import './Navbar.scss'
import CarWidget from '../CarWidget/CarWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header  >
            <nav className="navbar navbar-expand-lg navbar-light w-75">
                <div className="container-fluid">
                    <Link className='text-decoration-none' to={"/"}>
                        <img src="\img\logo_blanco.webp" alt="Logo" width={200} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarNav">
                        <ul className="navbar-nav text-white">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white " to="/categoria/1">
                                    PVC
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white " to="/categoria/2">
                                    Metal
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white " to="/categoria/3">
                                    Vidrio
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <CarWidget />
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
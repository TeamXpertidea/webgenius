import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <NavLink to={"/"}>
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
            </NavLink>
                
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavLink to={"/"}>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                        Home
                    </a>
                    </li>
                    </NavLink>
                    <NavLink to={"/about"}>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        About
                    </a>
                    </li>
                    </NavLink>
                    <NavLink to={"/contact"}>
                        <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                        </li>
                    </NavLink>
                </ul>
                
                </div>
            </div>
            </nav>
  )
}

export default Navbar
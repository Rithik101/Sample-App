import React from 'react'
import '../../assets/css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


const header = () => {
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <span className="text-capitalize">
                        <Link className="navbar-brand mb-0 align-items-center" to="/home">
                            Shop-E </Link>
                    </span>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Log In</Link>
                            </li>
                        </ul>
                        <div className="nav-button ml-auto d-flex">
                            <button className="call-now-button ">
                                <FontAwesomeIcon icon={faRightToBracket} className="mx-2" />
                                <Link to="/login" >Login</Link>
                            </button>
                            <button className="call-now-button">

                                <FontAwesomeIcon icon={faCartShopping} className='mx-2' />
                                <Link to="/cart">Cart</Link>
                            </button>

                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default header;
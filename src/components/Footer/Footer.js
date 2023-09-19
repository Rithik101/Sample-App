import React from 'react';
import '../../assets/css/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (

        <footer id="footer" className="mt-5">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Become an Insider</h3>
                            <h5>
                                Receive exclusive offers, offer news, and more when you
                                subscribe.
                            </h5>
                            <p>
                                United States <br />
                                India <br />
                                Australia <br />
                            </p>

                            <strong>Phone:</strong> +91-9898989898 <br />
                            <strong>Email:</strong> Shop.e@test.com <br />
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/product">Product</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/retailer">Find a retailer</Link>
                                </li>
                                <li>
                                    <Link to="/corporate">Corporate gifting</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Shop</h4>
                            <ul>
                                <li> <Link to="/product" >Shirt</Link> </li>
                                <li> <Link to="/product" >T-shirt</Link> </li>
                                <li> <Link to="/product" >Watch</Link> </li>
                                <li> <Link to="/product" >Phones</Link> </li>
                                <li> <Link to="/product" >Shirt</Link> </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                                quibusdam.
                            </p>

                            <div className="social-links mt-3">
                                <Link to="https://twitter.com/your-twitter-username" >
                                    <FontAwesomeIcon className="m-2" icon={faTwitter} /></Link>
                                <Link to="https://www.facebook.com/your-facebook-profile">
                                    <FontAwesomeIcon className="m-2" icon={faFacebook} /></Link>
                                <Link to="https://www.instagram.com/your-instagram-profile">
                                    <FontAwesomeIcon className="m-2" icon={faInstagram} /></Link>
                                <Link to="skype:your-skype-username?chat">
                                    <FontAwesomeIcon className="m-2" icon={faSkype} /></Link>
                                <Link to="https://www.linkedin.com/in/your-linkedin-profile">
                                    <FontAwesomeIcon className="m-2" icon={faLinkedin} /></Link>

                            </div>
                            <div className="container py-4">
                                <div className="copyright">
                                    &copy; Copyright <strong><span>Shop-E</span></strong>
                                </div>
                                <div className="credits">Designed by <Link to="/home" > Rithik </Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};



export default Footer;
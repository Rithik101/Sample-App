import React from 'react'
import dowImg from '../../src/assets/img/E-Down.jpg'
import { Link } from 'react-router-dom';
import OfferSection from './OfferSection';
import ProductCard from './ProductCard';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';


const Home = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const successMessage = queryParams.get("success");

    const [visible, setVisible] = useState(true);

    // To Hide the success message 
    useEffect(() => {
        if (successMessage) {
            const timeout = setTimeout(() => {
                setVisible(false);
            }, 1000);

            // Clear the timeout when the component unmounts
            return () => clearTimeout(timeout);
        }
    }, [successMessage]);

    return (
        <>

            <section className=" p-4 mt-2">
                <div className="container">
                    <div className="row align-items-center">
                        {visible && successMessage && (
                            <div className=" mt-3 p-4 alert alert-success">{successMessage}</div>
                        )}
                        <div className="col-md-6 mt-5">
                            <div className="collection-content mt-5">

                                {/* Rest of your homepage content */}
                                <h1>Trendy</h1>
                                <h1>Collection</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Impedit, atque animi repellendus, cupiditate assumenda commodi
                                    dolores deserunt tenetur ab quasi est! Unde hic accusamus optio
                                    explicabo doloremque, sint magni. Consectetur?.
                                </p>
                                <Link to="/product" className="btn btn-secondary custom-button">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner rounded mt-5">
                                    <div className="carousel-item active">
                                        <img
                                            src={dowImg}
                                            className="d-block w-100"
                                            alt="Summer Collection  1"
                                        />

                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <ProductCard />
            <OfferSection />
        </>

    );
};




export default Home;

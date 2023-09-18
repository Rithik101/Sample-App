import React from 'react';


const OfferSection = () => {
    return (
        <section id="offer" className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 py-3 py-md-0 text-center">
                        <i className="far fa fa-shopping-cart fa-3x"></i>
                        <h3>Free Shipping</h3>
                        <p>On order over $1000</p>
                    </div>
                    <div className="col-md-3 py-3 py-md-0 text-center">
                        <i className="far fa fa-undo fa-3x"></i>
                        <h3>Free Returns</h3>
                        <p>Within 30 days</p>
                    </div>
                    <div className="col-md-3 py-3 py-md-0 text-center">
                        <i className="far fa fa-truck fa-3x"></i>
                        <h3>Fast Delivery</h3>
                        <p>World Wide</p>
                    </div>
                    <div className="col-md-3 py-3 py-md-0 text-center">
                        <i className="far fa fa-thumbs-up fa-3x"></i>
                        <h3>Big choice</h3>
                        <p>Of products</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from "./CartContext"


const Product = () => {
    const [items, setItems] = useState([]);
    const [heart, setHeart] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const { addToCart } = useCart();

    useEffect(() => {
        // Fetch product data 
        fetch("http://localhost:5000/products/")
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);


    const Heart = () => {
        if (heart) {
            setHeart(false);
        }
        else {
            setHeart(true);
        }
    }

    return (
        <div className="mt-5">
            <h1 className=" bg-secondary text-white text-center border-radius p-2">Products</h1>
            {showMessage && <div className="alert alert-success mt-2">Product added successfully!</div>}
            {items.map((item) => (
                <div className=" text-center d-inline-flex m-3">
                    <Card
                        className="col-xl-2 shadow p-3 mb-5 bg-body rounded"
                        style={{ width: '14rem' }}>
                        <Card.Img
                            variant="top" src={item.imgUrl} height="50%" />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.desc}
                            </Card.Text>
                            <h5>Price : {item.price}/-</h5>
                            <Button
                                className=" text-info primary alert bg-dark"
                                role="alert"
                                onClick={() => {
                                    addToCart(item);
                                    setShowMessage(true); // Show message when the button is clicked
                                    setTimeout(() => setShowMessage(false), 2000); // Hide my message after 2 seconds
                                }}
                            >
                                Add to Cart
                            </Button>

                            <div className="heart ">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o" : "fa-heart text-danger"}`}></i>
                            </div>
                            <div className="rating">
                                <i className="fa fa-star text-danger"></i>
                                <i className="fa fa-star "></i>
                                <i className="fa fa-star "></i>
                                <i className="fa fa-star "></i>
                                <i className="fa fa-star-half"></i>
                            </div>
                        </Card.Body >
                    </Card >

                </div >
            ))
            }
        </div >
    );
};

export default Product;

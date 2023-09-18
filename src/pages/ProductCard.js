import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const apiUrl = 'http://localhost:5000/Products';

const ProductCard = ({ product }) => {
    const [heart, setHeart] = useState([]);

    const Heart = () => {
        if (heart) {
            setHeart(false);
        }
        else {
            setHeart(true);
        }
    }

    return (

        <div className="col-xl-2 col-lg-4 col-sm-6 mb-3 m-3 Card border border-dark">
            <div className="product text-center product-box m-1">
                <div className="position-relative mb-3">
                    <Link to={`/product/${product.id}`}>
                        <img
                            className="img-fluid w-100"
                            src={product.imgUrl}
                            alt={product.title}
                        />
                    </Link>
                    <div className="mt-3">
                        <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0">
                                <i onClick={Heart} className={`fa ${heart ? "fa-heart-o " : "fa-heart text-danger"}`}></i>
                            </li>
                        </ul>
                    </div>
                </div>

                <h6>
                    <Link className="reset-anchor product-detail" to='./product'>
                        {product.title}
                    </Link>
                </h6>
                <p className="lead">${product.price}</p>
            </div>
        </div>
    );
};

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data -> JSON server
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <section className="py-5 mt-5 ">
            <div className="container">
                <div className="Home-text">
                    <h2 className="text-uppercase mb-1">Summer Collection</h2>
                    <p className="h5 text-uppercase mb-4">Top trending products</p>
                </div>

                <div className="row justify-content-center">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;

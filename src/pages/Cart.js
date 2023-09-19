import React from "react";
import { useCart } from "./CartContext";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";


const Cart = () => {
    const { cartItems, removeFromCart, incQty, decQty } = useCart();
    // console.log(cartItems);
    debugger

    const calculateSubtotal = (item) => {
        return item.price * item.Qty;
    };

    const total = cartItems.reduce((acc, item) => {
        return acc + calculateSubtotal(item);
    }, 0);

    return (
        <div className="mt-5 overflow-hidden">
            <h1 className="bg-secondary text-white text-center p-2">Cart</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {cartItems && cartItems.length === 0 ?
                        <p>Your cart is empty.</p>
                        : (
                            <ListGroup>
                                {cartItems && cartItems.map((item) => (
                                    <ListGroup.Item key={item.id}>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h4>{item.title}</h4>
                                                <p>Price: ${item.price}</p>
                                                <p>Quantity: {item.Qty}</p>
                                            </div>

                                            <div className="col-md-4 text-right">
                                                <p>
                                                    Qty:
                                                    <Button onClick={() => decQty(item.id)} className="m-1">
                                                        -
                                                    </Button>
                                                    {item.Qty}
                                                    <Button onClick={() => incQty(item.id)} className="m-1">
                                                        +
                                                    </Button>
                                                </p>
                                                <p>Subtotal: ${calculateSubtotal(item)}</p>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}

                    <div className="text-right mt-3">
                        <p>Total: ${total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Cart;

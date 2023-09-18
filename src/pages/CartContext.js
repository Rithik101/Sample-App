import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingProduct = cartItems.find((item) => item.id === product.id);

        if (existingProduct) {
            // Product available then, update -- quantity
            existingProduct.qty += 1;
            setCartItems([...cartItems]);

        } else {
            // product [ !Cart ] , add Qty + 1
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };


    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
    };

    const decQty = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
        );
        setCartItems(updatedCart);
        console.log(updatedCart);
    };

    const incQty = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
        setCartItems(updatedCart);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incQty, decQty }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

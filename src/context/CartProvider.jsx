import { useState } from "react"
import { CartContext } from "./CartContext"

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = itemCart => setCartItems([...cartItems, itemCart])

    const eraseCart = () => setCartItems([])

    const getQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

    const getTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, getQuantity, getTotal, eraseCart }}>
            {children}
        </CartContext.Provider>
    )
}


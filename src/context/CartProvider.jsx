import { useState } from "react"
import { CartContext } from "./CartContext"

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])

    const addToCart = itemCart => setCartItems([...cartItems, itemCart])

    
    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}


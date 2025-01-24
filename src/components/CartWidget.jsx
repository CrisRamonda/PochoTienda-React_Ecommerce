import { Button } from "react-bootstrap"
import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartWidget() {
    const [cartElements, setCartElem] = useState(0)
    const {addToCart,cartItems} = useContext(CartContext)

    console.log(cartItems);
    

    return (
        <>
            <div style={{ color: 'white' }}>
                🛒{cartElements}
            </div>
            <Button className="mx-4" variant="light">
                Ir al carro
            </Button>
        </>
    )
}

export default CartWidget
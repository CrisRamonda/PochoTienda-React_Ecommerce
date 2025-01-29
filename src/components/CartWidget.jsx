import { Button } from "react-bootstrap"
import { useState, useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router"
import Cart from "./Cart"

function CartWidget() {
    const [cartElements, setCartElem] = useState(0)
    const { cartItems, getQuantity } = useContext(CartContext)

    console.log('CartItems: ', cartItems);

    useEffect(()=>{
        setCartElem(getQuantity)
    },[getQuantity])

    return (
        <>
            <div style={{ color: 'white' }}>
                🛒{cartElements}
            </div>
            <Button as={Link} to='/cart/' className="mx-4" variant="light">
                Ir al carro
            </Button>
        </>
    )
}

export default CartWidget
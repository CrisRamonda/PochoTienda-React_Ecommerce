import { useState, useContext, useEffect } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router"
import { CartContext } from "../context/CartContext"

function CartWidget() {
    const [cartElements, setCartElem] = useState(0)
    const { cartItems, getQuantity } = useContext(CartContext)

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
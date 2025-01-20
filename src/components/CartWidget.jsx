import { Button } from "react-bootstrap"
import { useState } from "react"

function CartWidget() {
    const [cart, setCart] = useState([])
    const [cartElements, setCartElem] = useState(0)

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
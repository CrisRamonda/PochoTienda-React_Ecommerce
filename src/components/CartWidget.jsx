import { useState, useContext, useEffect } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router"
import { ShoppingCart } from "lucide-react"
import { CartContext } from "../context/CartContext"

function CartWidget() {
    const [cartElements, setCartElem] = useState(0)
    const { cartItems, getQuantity } = useContext(CartContext)

    useEffect(() => {
        setCartElem(getQuantity)
    }, [getQuantity])

    if (cartElements != 0) {
        return (
            <>
                <div style={{
                    color: 'white',
                    display: 'flex'
                }}>
                    <ShoppingCart style={{ marginRight: '5px' }} />{cartElements}
                </div>
                <Button as={Link} to='/cart/' className="mx-4" variant="light">
                    Ir al carro
                </Button>
            </>
        )
    } else {
        return (
            <>
                <div style={{
                    color: 'white',
                    display: 'flex'
                }}>
                    <ShoppingCart style={{ marginRight: '5px' }} />{cartElements}
                </div>
                <Button className="mx-4" style={{ visibility: 'hidden' }}>
                    Ir al carro
                </Button>
            </>
        )
    }
}

export default CartWidget
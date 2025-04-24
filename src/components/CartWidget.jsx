import { useState, useContext, useEffect } from "react"
import { Link } from "react-router"
import { ShoppingCart } from "lucide-react"
import { CartContext } from "../context/CartContext"

function CartWidget() {
    const [cartElements, setCartElem] = useState(0)
    const { getQuantity } = useContext(CartContext)

    useEffect(() => {
        setCartElem(getQuantity)
    }, [getQuantity])

    return (
            <Link className="cart-logo" to='/cart/'>
                    <ShoppingCart style={{ marginRight: '5px' }} />
                    {cartElements > 0 ?
                        <div>{cartElements}</div> :
                        <div style={{ visibility: 'hidden' }}>{cartElements}</div>}
            </Link>
    )
}

export default CartWidget
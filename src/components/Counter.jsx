import { useState, useContext } from "react"
import { Container, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"

function Counter({ itemCart }) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubstract = () => {
        setCount(count - 1)
    }

    const handleAddToCart = () => {
        addToCart({ ...itemCart, quantity: count })
        console.log('Count', count)
        console.log('itemCart', itemCart);
    }

    return (
        <Container>
            <div className="h5">Cantidad</div>
            <Button variant='danger' onClick={handleSubstract}>-1</Button>
            <Button className="" variant='success' onClick={handleAdd}>+1</Button>
            <div className="h5">{count}</div>
            <Button variant="dark" onClick={handleAddToCart}>Agregar al Carrito</Button>
        </Container>
    )
}

export default Counter
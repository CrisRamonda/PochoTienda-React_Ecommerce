import { useState, useContext, useEffect } from "react"
import { Container, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router"
import { Plus, Minus } from 'lucide-react';

function Counter({ itemCart }) {
    const [count, setCount] = useState(0)
    const [added, setAdded] = useState(false)
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        if (count < 0) {
            setCount(0)
        }
    }, [count])

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubstract = () => {
        setCount(count - 1)
    }

    const handleAddToCart = () => {
        if (count == 0) {
            alert('Debe agregar al menos un producto')
        } else {
            addToCart({ ...itemCart, quantity: count })
            setAdded(true)
        }
    }

    if (added == true) {
        return (
            <Container>
                <div className="h5">Item Agregado al Carrito</div>
                <div className="h6">Puedes ir al carrito, o ver categorías para seguir explorando productos</div>
                <Button variant="dark" as={Link} to='/cart/' style={{ marginRight: 5 }}>Ir al Carrito</Button>
                <Button variant="dark" as={Link} to='/'>Explorar productos</Button>
            </Container>
        )
    }

    return (
        <Container>
            <div className="h5">Cantidad</div>
            <Button variant='danger' onClick={handleSubstract}><Minus /></Button>
            <Button className='mx-1' variant='success' onClick={handleAdd}><Plus /></Button>
            <div className="h5">{count}</div>
            <Button variant="dark" onClick={handleAddToCart}>Agregar al Carrito</Button>
        </Container>
    )
}

export default Counter
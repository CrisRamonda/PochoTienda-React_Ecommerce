import { useState } from "react"
import { Container, Button } from "react-bootstrap"

function Counter() {
    const [count, setCount] = useState(0)
    // nombre del estado, y el SETER, luego el valor inicial del estado

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubstract = () => {
        setCount(count - 1)
    }

    return (
        <Container>
            <div className="h5">Cantidad</div>
            <Button variant='danger' onClick={handleSubstract}>-1</Button>
            <Button className="" variant='success' onClick={handleAdd}>+1</Button>
            <div className="h5">{count}</div>
            <Button variant="dark">Agregar al Carrito</Button>
        </Container>
    )
}

export default Counter
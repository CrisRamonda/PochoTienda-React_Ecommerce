import { useContext } from "react"
import { Card, ListGroup, Container, Button } from "react-bootstrap"
import { Link } from "react-router"
import { CartContext } from "../context/CartContext"
import Cart from "./Cart"

function CartContainer() {
    const { cartItems, getTotal } = useContext(CartContext)

    if (getTotal == 0) {
        return (
            <Container style={{ width: '60rem', marginTop: '15px' }}>
                <Card>
                    <Card.Header className="h4">
                        ¡Carrito Vacío!
                    </Card.Header>
                    <Card.Text className="text-center h5">Explora mas productos para añadirlos:</Card.Text>
                    <Card.Footer className="text-end h5 m-0">
                        <Button variant="dark" as={Link} to='/'>Explorar productos</Button>
                    </Card.Footer>
                </Card>
            </Container>
        )
    }

    return (
        <Container style={{ width: '60rem', marginTop: '15px' }}>
            <Card>
                <Card.Header className="h4">
                    Revisa tu carrito:
                </Card.Header>
                <ListGroup variant="">
                    {cartItems.map(item =>
                        <Cart key={item.id} itemCart={item} />)}
                </ListGroup>
                <Card.Footer className="text-end h5 m-0">
                    Total: ${getTotal}
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default CartContainer
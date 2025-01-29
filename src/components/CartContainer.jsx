import { useContext } from "react"
import { Card, ListGroup, Container } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import Cart from "./Cart"


function CartContainer() {
    const { cartItems, getTotal } = useContext(CartContext)

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
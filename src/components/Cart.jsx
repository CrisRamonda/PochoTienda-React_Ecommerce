import { useContext } from "react"
import { Card, ListGroup, Row, Col } from "react-bootstrap"
import { CartContext } from "../context/CartContext"

function Cart() {
    const { cartItems, getQuantity, getTotal } = useContext(CartContext)

    console.log('Carrito', cartItems)
    console.log('getQty', getQuantity)

    return (
        <Card style={{ width: '55rem' }}>
            <ListGroup variant="">
                {cartItems.map(item =>
                    <ListGroup.Item key={item.id}>
                        <Row>
                            <Col>

                                {item.title}

                            </Col>
                            <Col>
                                x{item.quantity}
                            </Col>
                            <Col>
                                ${item.price * item.quantity}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )}
                <Card.Footer>Total: ${getTotal}</Card.Footer>
            </ListGroup>
        </Card>
    )
}

export default Cart
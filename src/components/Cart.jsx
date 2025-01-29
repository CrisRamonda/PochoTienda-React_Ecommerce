import { ListGroup, Row, Col } from "react-bootstrap"

function Cart({ itemCart }) {
    return (
        <ListGroup.Item>
            <Row>
                <Col xs={9}>
                    {itemCart.title}
                </Col>
                <Col>
                    x{itemCart.quantity}
                </Col>
                <Col>
                    ${itemCart.price * itemCart.quantity}
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default Cart
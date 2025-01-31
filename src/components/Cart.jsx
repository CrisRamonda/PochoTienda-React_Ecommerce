import { ListGroup, Row, Col, Image } from "react-bootstrap"

function Cart({ itemCart }) {
    return (
        <ListGroup.Item>
            <Row>
                <Col>
                    <Image style={{maxWidth: 50}} src={itemCart.image} />
                </Col>
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
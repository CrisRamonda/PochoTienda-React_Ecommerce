import { useContext } from "react"
import { Card, Container, Button} from "react-bootstrap"
import { useParams, Link } from "react-router"
import { CartContext } from "../context/CartContext"


function Order() {
    const { orderId } = useParams()

    return (
        <Container style={{ maxWidth: 700, marginTop: 20}}>
            <Card>
                <Card.Header className="h4">
                    ¡Compra realizada con Éxito!
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        El ID de su compra es: {orderId}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-end h5 m-0">
                    <Button  variant="dark" as={Link} to='/'>Volver al Catálogo</Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default Order
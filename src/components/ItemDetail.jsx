import { Card, Button} from "react-bootstrap"
import { Link } from "react-router"
import Counter from "./Counter"

function ItemDetail({ itemDet }) {
    if (itemDet) {
        return (
            <Card className="d-flex justify-content-center" style={{ width: '40rem' }}>
                <Card.Img variant="top" src={itemDet?.image}></Card.Img>
                <Card.Body className="">
                    <Card.Title>{itemDet?.title}</Card.Title>
                    <Card.Text>{itemDet?.description}</Card.Text>
                    <Card.Text className="text-end h4">${itemDet?.price}</Card.Text>
                </Card.Body>
                <Card.Footer > <Counter itemCart={itemDet} /> </Card.Footer>
            </Card>
        )
    } else {
        return (
            <Card className="d-flex justify-content-center" style={{ width: '40rem' }}>
                <Card.Img variant="top" src={itemDet?.image}></Card.Img>
                <Card.Body className="">
                    <Card.Title>Este producto no existe!</Card.Title>
                    <Card.Text>Continúa explorando mas productos</Card.Text>
                </Card.Body>
                <Card.Footer > <Button variant="dark" as={Link} to='/'>Explorar productos</Button> </Card.Footer>
            </Card>
        )
    }
}

export default ItemDetail
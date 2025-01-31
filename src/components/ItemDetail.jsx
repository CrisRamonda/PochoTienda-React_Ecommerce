import { Card } from "react-bootstrap"
import Counter from "./Counter"

function ItemDetail({ itemDet }) {
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
}

export default ItemDetail
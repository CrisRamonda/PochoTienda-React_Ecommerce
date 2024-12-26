import { Card } from "react-bootstrap"
import Counter from "./Counter"

function ItemDetail(itemDet) {
    console.log('itemDet data: ', itemDet)

    return (
        <Card className="d-flex justify-content-center" style={{ width: '40rem' }}>
            <Card.Img variant="top" src={itemDet?.itemDet?.image}></Card.Img>
            <Card.Body className="">
                <Card.Title>{itemDet?.itemDet?.title}</Card.Title>
                <Card.Text>{itemDet?.itemDet?.description}</Card.Text>
                <Card.Text className="text-end h4">${itemDet?.itemDet?.price}</Card.Text>
            </Card.Body>
            <Card.Footer > <Counter /> </Card.Footer>
        </Card>
    )
}

export default ItemDetail
import { Card } from "react-bootstrap"

function ItemDetail(itemDet) {
    console.log('itemDet data: ', itemDet)

    return (
            <Card  className="">
                <Card.Img className="" variant="top" src={itemDet?.itemDet?.image}></Card.Img>
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{itemDet?.itemDet?.title}</Card.Title>
                    <Card.Text>{itemDet?.itemDet?.description}</Card.Text>
                    <Card.Text className="text-end">${itemDet?.itemDet?.price}</Card.Text>
                </Card.Body>
            </Card>
    )
}

export default ItemDetail
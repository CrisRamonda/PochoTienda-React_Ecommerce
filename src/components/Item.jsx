import { Card, Button, Container } from 'react-bootstrap'

function Item({ item }) {
    return (
        <Card>
            <Card.Img variant='top' src={item.image}></Card.Img>
            <Card.Body className='d-flex flex-wrap'>
                <Card.Text className='fw-bold'>
                    {item.title}
                </Card.Text>
                <Container className='d-flex justify-content-between align-self-end p-0'>
                    <Button variant="dark" >Ver Detalle</Button>
                    <Card.Text className='align-self-end'>
                        ${item.price}
                    </Card.Text>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default Item
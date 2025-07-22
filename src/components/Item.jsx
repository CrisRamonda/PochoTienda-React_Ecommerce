import { Card, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router'

function Item({ item }) {
    return (
        <Card className='d-flex flex-column' style={{ height: '33rem', width: '22rem' }}>
            <Container style={{ height: '20rem', width: '100%' }} className='d-flex justify-content-center align-items-center'>
                <Card.Img className='d-flex' variant='top' src={item.image} style={{ objectFit: 'cover' }}></Card.Img>
            </Container>
            <Card.Body className='d-flex flex-wrap align-items-end'>
                <Card.Text className=''>
                    {item.title}
                </Card.Text>
                <Container className='d-flex justify-content-between align-self-end p-0'>
                    <Button variant="dark" as={Link} to={`/products/${item.id}`} >Ver Detalle</Button>
                    <Card.Text>
                        ${item.price}
                    </Card.Text>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default Item
import { useContext,useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router"
import { serverTimestamp, doc } from "firebase/firestore"
import { createOrder } from "../firebase/db"
import { CartContext } from "../context/CartContext"


function CheckOut() {
    const { cartItems, getTotal, eraseCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (getTotal == 0) {
            navigate('/cart/')
        } else {
            const formCheckOut = e.target
            const { name, email, phone } = formCheckOut
            const order = {
                buyer: { name: name.value, email: email.value, phone: phone.value, },
                items: cartItems,
                date: serverTimestamp(),
                total: getTotal
            }
            const orderRefId = await createOrder(order)
            setOrderId(orderRefId)
            navigate(`/order/${orderRefId}`)
            eraseCart()
            
        }
    }

    return (
        <Container style={{ maxWidth: 800, marginTop: 20 }}>
            <Form onSubmit={handleSubmit}>
                <Form.Text style={{ fontSize: 25 }}>Ingresa tus datos para finalizar la compra:</Form.Text>
                <Form.Group className="mb-3 mt-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Pocho Pepito" required />
                </Form.Group>
                <Form.Group className="mb-3 mt-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="pochotienda@opepito.com" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="3031234567" required />
                </Form.Group>
                <Form.Text style={{ fontSize: 20, marginRight: 15 }}>Total: ${getTotal}</Form.Text>
                <Container className="text-end p-0">
                    <Button variant="dark" type="submit">Finalizar Compra</Button>
                </Container>
            </Form>
        </Container>
    )
}

export default CheckOut
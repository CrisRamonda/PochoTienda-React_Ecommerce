import { Link } from "react-router"
import { Image, Container, Button } from "react-bootstrap"

function Home() {
    return (
        <div style={{
            minHeight: '93vh',
            background: 'linear-gradient(125deg, rgb(129, 212, 250, 50%) 50%,rgb(255, 255, 255) 50%)'
        }}>
            <Container className="d-flex flex-column-reverse flex-md-row justify-content-around" style={{paddingTop: '10vh'}}>
                <div className="d-flex flex-column align-self-center ">
                    <h2 className="fs-1">¡Bienvenid@!</h2>
                    <p className="fs-5">Pase a ver los peores productos del condado</p>
                    <Button className="fs-4" variant="dark" as={Link} to='/products/'>Explorar tienda</Button>
                </div>
                <Image className="home-image" src="assets/ImagenHome.png"></Image>
            </Container>
        </div>
    )
}

export default Home
import { Link } from "react-router"
import { Image, Container, Button } from "react-bootstrap"

function Home() {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(125deg, rgb(129, 212, 250, 50%) 50%,rgb(255, 255, 255) 50%)'
        }}>
            <Container style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: '10vh'
            }}>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                    alignSelf:'center'
                }}>
                    <h4>¡Bienvenid@!</h4>
                    <p>Pase a ver los peores productos del condado</p>
                    <Button variant="dark" as={Link} to='/products/'>Explorar tienda</Button>
                </div>
                <Image style={{ maxWidth: '33vw' }} src="./src/assets/ImagenHome.png"></Image>
            </Container>
        </div>
    )
}

export default Home
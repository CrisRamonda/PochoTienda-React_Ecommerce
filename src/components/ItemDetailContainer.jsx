import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [itemDetCont, setItemDetCont] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.in/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setItemDetCont(data.product)
            })
    }, [id])

    return (
        <Container className="p-5 d-flex justify-content-center">
            <ItemDetail itemDet={itemDetCont}></ItemDetail>
        </Container>
    )
}

export default ItemDetailContainer
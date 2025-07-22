import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router"
import { getProducts, getProductById } from "../firebase/db"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [itemDetCont, setItemDetCont] = useState()
    const { id: productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(res => setItemDetCont(res))
    }, [productId])

    return (
        <Container className="p-5 d-flex justify-content-center" >
            <ItemDetail itemDet={itemDetCont}></ItemDetail>
        </Container>
    )
}

export default ItemDetailContainer
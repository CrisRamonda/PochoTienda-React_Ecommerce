import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import { Container } from "react-bootstrap"

function ItemDetailContainer() {
    const [itemDetCont, setItemDetCont] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.in/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setItemDetCont(data.product),
                    console.log('ItemDetCont Data: ', data.product)
            })
    }, [id])


    return (
        <Container className="p-5">
            <ItemDetail itemDet={itemDetCont}></ItemDetail>
        </Container>
    )
}

export default ItemDetailContainer
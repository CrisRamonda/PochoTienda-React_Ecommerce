import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../firebase/db'
import ItemList from "./ItemList"

function ItemListContainer() {
    const [itemsILC, setItems] = useState([])
    const { category } = useParams()

    useEffect(() => {
        if (category) {
            getProductsByCategory(category)
                .then(res => setItems(res))
        } else {
            getProducts()
                .then(res => setItems(res))
        }
    }, [category])

    return (
        <Container >
            <ItemList itemsIL={itemsILC}></ItemList>
        </Container>
    )
}

export default ItemListContainer
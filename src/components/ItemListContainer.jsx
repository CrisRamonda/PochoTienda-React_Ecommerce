import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ItemList from "./ItemList"


function ItemListContainer() {
    const [itemsILC, setItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.in/api/products')
            .then(res => res.json())
            .then(data => {
                setItems(data.products);
                console.log('ItemsILC data: ', data)
            })
            .catch(err => { console.log('Error en ItemsILC: ', err) })
    }, [])

    console.log('Items ItemsILC: ', itemsILC)

    return (
        <Container>
            <ItemList itemsIL={itemsILC}></ItemList>
        </Container>
    )
}

export default ItemListContainer
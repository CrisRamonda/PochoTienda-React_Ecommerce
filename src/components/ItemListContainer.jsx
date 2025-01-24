import { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import { CartContext } from '../context/CartContext'


function ItemListContainer() {
    const [itemsILC, setItems] = useState([])
    const { category } = useParams()


    useEffect(() => {
        const url = category
            ? `https://fakestoreapi.in/api/products/category?type=${category}`
            : 'https://fakestoreapi.in/api/products'

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data.products);
                //console.log('ItemsILC data: ', data.products)
            })
            .catch(err => { console.log('Error en ItemsILC: ', err) })
    }, [category])

    const filItemsILC = category
        ? itemsILC.filter(item => item.category === category)
        : itemsILC

    //console.log('Items filtrados ItemsILC: ', filItemsILC)




    return (
        <Container>
            <ItemList itemsIL={filItemsILC}></ItemList>
        </Container>
    )
}

export default ItemListContainer
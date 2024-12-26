import { Row } from 'react-bootstrap'
import Item from './Item'

function ItemList({ itemsIL }) {
    console.log('Recibe ItemList: ', itemsIL)
    return (
        <Row xs={1} sm={2} md={3} lg={4} className='gap-3 my-4 justify-content-center'>
            {itemsIL.map(itemMap =>
                <Item key={itemMap.id} item={itemMap}></Item>
            )}
        </Row>
    )
}

export default ItemList
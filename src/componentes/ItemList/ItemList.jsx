import React from 'react'
import Item from '../Item/Item'
import './ItemList.scss'

const ItemList = ({ productos }) => {
    return (
        <div className='row row-cols-1 row-cols-md-2 g-5 mx-5'>
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>

    )
}

export default ItemList
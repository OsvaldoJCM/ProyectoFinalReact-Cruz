import React from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
// import { getProductos, getProductoPorCateforia } from '../asyncmock'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };

                })
                setProductos(nuevosProductos);
            }).catch(error => console.log(error))
    }, [idCategoria])

    return (
        <div className='itemListContainer' >
            <h2 className='text-center my-4'>Nuestros Productos</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
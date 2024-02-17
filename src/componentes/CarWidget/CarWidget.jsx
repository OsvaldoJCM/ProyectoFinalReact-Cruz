import './CarWidget.scss'
import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CarWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext)
    return (
        <div className='carrito'>
            <Link to="/cart">
                <img src="/img/carrito.png" alt="Carrito" />
                {

                    cantidadTotal > 0 && <strong style={{ color: 'white' }}>{cantidadTotal}</strong>
                }
            </Link>
        </div>
    )
}

export default CarWidget
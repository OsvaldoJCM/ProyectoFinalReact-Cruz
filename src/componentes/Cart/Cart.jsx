import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import { CarritoContext } from '../../context/CarritoContext'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <div style={{ textAlign: 'center', marginTop: "25px" }}>
                    <h2>No hay productos en el carrito</h2>
                    <Link to="/" className='btn btn-primary mt-4'> Ver Productos</Link>
                </div>
            </>
        )

    }

    return (
        <div style={{ textAlign: 'center' }}>
            {
                carrito.map(prod => <CartItem key={carrito.id} {...prod} />)

            }
            <h3> Total :$ {total}</h3>
            <button className='btn btn-primary mx-3' onClick={() => vaciarCarrito()}> Vaciar Carrito</button>
            <Link to="/checkout" className='btn btn-primary'>Finalizar Compra</Link>
        </div >
    )
}

export default Cart
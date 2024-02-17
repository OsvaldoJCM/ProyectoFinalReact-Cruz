import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({ id, nombre, material, img, stock, precio }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarAlCarrito } = useContext(CarritoContext);


    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("productos Agregados : " + cantidad);
        const item = { id, nombre, precio }
        agregarAlCarrito(item, cantidad)
    }

    return (
        <div>
            <div className="card mx-5 my-5" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt={nombre} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">Material : {material}.</p>
                            <p className="card-text">Stock : {stock}.</p>
                            <p className="card-text "><small className="text-muted align-bottom">Actualizado hace 5 dias</small></p>
                            {
                                agregarCantidad > 0 ? (<Link className='btn btn-primary' to="/cart"> Terminar Compra</Link>) : <ItemCount className='btn btn-primary' inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
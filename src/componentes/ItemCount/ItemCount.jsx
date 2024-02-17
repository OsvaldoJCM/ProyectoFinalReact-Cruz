import React from 'react'
import { useState, useEffect } from "react";
import './ItemCount.scss'

const ItemCount = ({ stock, inicial, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("white");

    useEffect(() => {
        if (contador > 5) {
            setColor("red");
        } else {
            setColor("white");
        }
    }, [contador])


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }

    }

    return (
        <div >
            <div className='d-flex justify-content-start align-items-center mb-3'>
                <button className='btn btn-primary' onClick={decrementar}> - </button>
                <p className='mx-2' >{contador}</p>
                <button className='btn btn-primary' onClick={incrementar}> + </button>
            </div>
            <button className='btn btn-primary' onClick={() => funcionAgregar(contador)} style={{ color: color }}> Agregar al carrito</button>
        </div >
    )
}

export default ItemCount
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, material, img, precio, stock }) => {

    return (
        <div>
            <div className="card text-center h-100 ">
                <img src={img} alt={nombre} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Material : {material}</p>
                    <p className="card-text">Precio : {precio}</p>
                    <p className="card-text">Stock : {stock}</p>
                    <Link className='btn btn-primary' to={`/item/${id}`}> Ver Detalles </Link>
                </div>
            </div>
        </div>
    )
}
export default Item
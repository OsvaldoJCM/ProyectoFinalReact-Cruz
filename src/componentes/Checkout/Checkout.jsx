import React, { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/config'
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenID, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {

            setError("Por favor completa todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {

            setError("Los email no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(prod => ({
                id: prod.item.id,
                nombre: prod.item.nombre,
                cantidad: prod.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                setNombre("");
                setApellido("");
                setTelefono("");
                setEmail("");
                setEmailConfirmacion("");
                setError("");
                Swal.fire(
                    {
                        title: "¡Orden generada exitosamente!",
                        text: `Tu número de orden es: ${docRef.id} `,
                        icon: 'success',
                    }
                )

            })
            .catch(error =>
                setError("No se puede crear la orden")
            )
    }
    return (
        <div className='d-flex flex-column justify-content-center' style={{ textAlign: 'center' }}>
            <h2>Checkout</h2>

            <form onSubmit={manejadorSubmit} style={{ width: "50%" }}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.cantidad} </p>
                            <p>{producto.item.precio}</p>
                        </div>
                    ))
                }

                <div className='form-group'>
                    <label htmlFor="nombre">Nombre</label>
                    <input className='form-control' type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor="apellido">Apellido</label>
                    <input className='form-control' type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor="telefono">Teléfono</label>
                    <input className='form-control' type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor="email">E-mail</label>
                    <input className='form-control' type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor="emailcon">Email Confirmacion</label>
                    <input className='form-control' type="email" id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className='btn btn-primary mt-3' > Finalizar Orden</button>

                {
                    ordenID && <strong>¡Gracias por su compra! Tu número de orden es el siguiente: {ordenID}</strong>
                }

            </form>
        </div>
    )
}

export default Checkout
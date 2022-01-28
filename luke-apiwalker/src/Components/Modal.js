import React from 'react'
import image from './90.jpeg'
export const Modal = ({setError}) => {

    return (
        <div className="card position-absolute top-0 start-50 translate-middle-x">
            <img src={image} className="card-img-top" alt="imagen de OBI WAN KENOBI"/>
                <div className="card-body">
                    <h5 className="card-title">Atencion</h5>
                    <p className="card-text">Estos no son los droides que está buscando</p>
                    <button className="btn btn-primary" onClick={() => setError(false)}>Cerrar</button>
                </div>
        </div>
    )
}

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'; 

export const Cards = ({ nombre, profesion, image }) => {
    return (
        <div className="container mt-5">
            <div className="card" style={{ width: '20rem' }}>
                <img src={image} className="card-img-top" alt="Imagen del profesional" />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{profesion}</p>
                </div>
            </div>
        </div>
    );
};

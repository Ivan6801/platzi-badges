import React from 'react';
import Error404Imagen from '../assets/images/Error404.svg';
import './styles/NotFound.css';

function NotFound() {
    return (
        <div>
            <img className="NotFound" src={Error404Imagen} alt="No encontrado" />
        </div>
    );
}

export default NotFound;
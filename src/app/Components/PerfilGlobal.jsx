// Esta línea indica que el componente se ejecutará en el NAVEGADOR (no en el servidor).
// Esto permite usar eventos (onClick), hooks (useState, useEffect), etc.

"use client";

import React from 'react'


export default function ({ nombre, descripcion, texto }) {

    const manejarClick = () => {
        alert("Los estilos globales funcionan muy bien para definir bases generales del proyecto —como tipografías, colores o resets—, pero es mejor evitar usarlos para componentes específicos. Esto mantiene el archivo limpio, ligero y evita que se vuelva difícil de mantener a medida que el proyecto crece.");
    };

    
  return (      <div className='tarjeta'>
            <h1 className='tarjeta h1'> CSS Global </h1>
            <h2 className='tarjeta h2'>trabajo en {nombre}</h2>
            <p className='tarjeta p'>{descripcion}</p>
            <button className='boton' onClick={manejarClick}>{texto}</button>
        </div>
    )
}

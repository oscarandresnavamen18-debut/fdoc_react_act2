'use client';
import React from 'react'
import styles from './FichaProducto.module.css'


export default function FichaProducto({ producto, precio, imagen }) {
        const manejarClick = () => {
        alert("Su compra fue exitosa!");
    };
    return (

    <div className={styles.tarjeta}>
      <img src={imagen} alt="" className={styles.imagen} />

      <h1 className={styles.nombre}>{producto} </h1>
      <div className={styles.precioBoton}>
        <h2 className={styles.precio}>{precio}</h2>
        {/* <button className={styles.boton}>Agregar</button> */}
        <button className={styles.boton} onClick={manejarClick}>Agregar</button>
      
      </div>

    </div>

  )
}

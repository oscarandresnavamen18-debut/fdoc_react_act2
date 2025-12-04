import React from 'react'
import PerfilGlobal from './components/PerfilGlobal'
import FichaProducto from './components/FichaProducto'
import BadgeEstado from './components/BadgeEstado'
import AvisoInline from './components/AvisoInline'

export default function page() {
   
  return (
    <>

    <PerfilGlobal nombre="Archivo CSS en /app/globals.css" descripcion="esto es un ejemplo de un estilo global" texto="¡Clic aquí!"/>
    <FichaProducto producto="ZAPATILLAS PARA TORNEOS " precio={95.10} imagen="https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/212/1-best-asics-tennis-shoes-16024617-main.jpg"/>
    <AvisoInline/>
    <BadgeEstado/>
    </>
  )
}


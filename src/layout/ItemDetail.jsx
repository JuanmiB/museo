import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { antiguedades } from '../data/objetos'
import './ItemDetail.css'
import { ButtonBack } from '../components/Botones'
const ItemDetail = () => {
  const { id } = useParams()
  const [producto, setProducto] = useState()
  useEffect(() => {
    console.log(id)
    const item = antiguedades.find((item) => item.id == id)
    setProducto(item)
  }
  , [id])
  $(document).ready(function () {
    $('.zoom').hover(function () {
      $(this).addClass('transition')
    }, function () {
      $(this).removeClass('transition')
    })
  })

  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', marginLeft: '40px', marginTop: '15px' }}>
      <ButtonBack/>
    </div>
      <div className='box'>
        <figure className='card img'>
            <img src={producto?.imagen} alt={producto?.nombre} className='zoom'/>
        </figure>
        <div className='card description'>
            <h1>{producto?.nombre}</h1>
            <h2>Rareza:⭐⭐⭐ </h2>
            <p>{producto?.descripcion}</p>
        </div>
      </div>
    </>
  )
}

export default ItemDetail

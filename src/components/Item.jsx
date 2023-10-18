import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ products }) => {
  return (
    <>
    <div className='itemList'>
      {
        products.map((item) => {
          return (
            <div key={item.id}>
            <Link to={`/item/${item.id}`}>
              <div className='item'>
                  <div className="fondoBlanco">
                <img src={item.imagen} alt="" width='200' />

                  </div>
                <div className='tittle'>
                  <h1>{item.nombre}</h1>
                </div>
                </div>

            </Link>
              </div>
          )
        }
        )
      }
    </div>
      </>
  )
}

export default Item

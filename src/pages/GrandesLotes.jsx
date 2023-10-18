import React from 'react'
import './GrandesLotes.css'
import { GRANDES_LOTES_IMG } from '../data/objetos'
import { motion } from 'framer-motion'
const GrandesLotes = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <div>Grandes lotes</div>
        <div className="galeria">
                <h1>Galeria de fotos</h1>
                <div className="grilla-galeria">
                  {
                    GRANDES_LOTES_IMG.map((img, index) => {
                      return (
                        <div key={index} className="imagen">
                          <img src={img.imagen} alt="" />
                        </div>
                      )
                    })
                  }
                </div>
            </div>
    </motion.div>
  )
}

export default GrandesLotes

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Item from '../components/Item'
import './antiques.css'
import { antiguedades as initialItems } from '../data/objetos'
import Search from '../components/Search'

const Antiques = () => {
  const antiques = initialItems
  const [filterHeroes, setFilterAntiques] = useState('')

  const filteredAntiques = (antiques) => {
    return antiques.filter(antique => {
      return antique.nombre.toLowerCase().includes(filterHeroes.toLowerCase())
    }
    )
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >

      <h1>Antiguedades</h1>
    <Search setFilterAntiques={setFilterAntiques} />
      <Item products={filteredAntiques(antiques)}/>
    </motion.div>
  )
}

export default Antiques

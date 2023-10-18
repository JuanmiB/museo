import React from 'react'
import { motion } from 'framer-motion'
import Item from '../components/Item'
import './antiques.css'
import { antiguedades as initialItems } from '../data/objetos'
import { useState } from 'react'

const Antiques = () => {
  const [filter, setFilter] = useState({
    category: 'all'
  })
  function filterByCategory(initialItems) {
    if (filter.category === 'all') {
      return initialItems
    } else {
      return initialItems.filter(item => item.category === filter.category)
    }
  }
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >

      <h1>Antiguedades</h1>
      <Item products={filterByCategory(initialItems)}/>
    </motion.div>
  )
}

export default Antiques

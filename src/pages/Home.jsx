import React from 'react'
import Carrosel from '../components/Carrosel'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <h1 style={{ position: 'absolute' }}>Te doy la bienvenida</h1>
      <Carrosel />
    </motion.div>
  )
}

export default Home

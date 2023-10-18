import React from 'react'
import './Field.css'
import { motion } from 'framer-motion'
const Field = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='field'>
        {children}
    </motion.div>
  )
}

export default Field

import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <ul className={`navbar ${isOpen && 'open'}`}>
        <li>
          <Link to='/' onClick={() => setIsOpen(!isOpen)}>
            Home
          </Link>
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to='/antiques'>
            Antiques
          </Link>
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to='/my-history'>
            My History
          </Link>
        </li>
        <li onClick={() => setIsOpen(!isOpen)}>
          <Link to='/grandes-lotes'>
            Grandes Lotes
          </Link>
        </li>
      </ul>
    <div className={`toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
      <div className='toggle__option'></div>
      <div className='toggle__option'></div>
      <div className='toggle__option'></div>
    </div>

    </>
  )
}

export default NavBar

import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Antiques from '../pages/Antiques'
import MyHistory from '../pages/MyHistory'
import ItemDetail from '../layout/ItemDetail'
import GrandesLotes from '../pages/GrandesLotes'

const Router = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home/>}/>
    <Route path='/antiques' element={<Antiques/>}/>
    <Route path='/my-history' element={<MyHistory />}/>
    <Route path='/grandes-lotes' element={<GrandesLotes/>}/>
    <Route path='/item/:id' element={<ItemDetail/>}/>
</Routes>
  )
}

export default Router

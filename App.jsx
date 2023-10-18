import React from 'react'
import Header from './src/layout/Header'
import Footer from './src/layout/Footer'
import Router from './src/router/Router'
import Field from './src/components/Field'
import './App.css'

const App = () => {
  return (
  
    <div className='container'>
    <Header />
    <Field>
    <Router />
    </Field>
    <Footer />
    </div>
  )
}

export default App

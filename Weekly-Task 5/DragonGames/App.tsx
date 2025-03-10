import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Buttoncomp from './components/Buttoncomp'
import Navbar from './components/Navbar'
import  DarkModeTheme  from './components/DarkModeTheme'
import CardComp from './components/CardComp'



function App() {

  return (
    
  <Fragment>
    <Navbar />
    <CardComp />
    
    <Buttoncomp />
  </Fragment>
  )
}

export default App

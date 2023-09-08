/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { Navbar } from "./Navbar/Navbar"
import { WhatsAppButton } from "./WhatsAppWeb/WhatsAppButton"
import { Footer } from "./Footer/Footer"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { WrapIndex } from "./WrapIndex/WrapIndex"
import { Oficinas } from "./Oficinas/Oficinas"
import { ProfesionalesPage } from "./Profesionales/ProfesionalesPage"
import { ServiciosPage } from "./ServicePage/ServiciosPage"
import { WrapperScroll } from "./Scroll/Scroll"
function App() {

  return (

    <>
      <Navbar />
      <WrapperScroll/>
      <Routes>
        <Route element={< WrapIndex />} path='/' />
        <Route element={< Oficinas />} path='/nuestro-estudio' />
        <Route element={< ProfesionalesPage />} path='/profesionales' />
        <Route element={< ServiciosPage />} path='/servicios' />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App

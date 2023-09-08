/* eslint-disable no-unused-vars */
import { Navbar } from "./Navbar/Navbar"
import { WhatsAppButton } from "./WhatsAppWeb/WhatsAppButton"
import { Footer } from "./Footer/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { WrapIndex } from "./WrapIndex/WrapIndex"
import { Oficinas } from "./Oficinas/Oficinas"
import { ProfesionalesPage } from "./Profesionales/ProfesionalesPage"
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route element={< WrapIndex />} path='/' />
        <Route element={< Oficinas />} path='/nuestro-estudio' />
        <Route element={< ProfesionalesPage />} path='/profesionales' />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App

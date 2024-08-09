import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Home}  from './pages/Home'
import Header from './components/navbar/Header'
import Footer from './components/footer/Footer'
import Aboutcontent from './components/Aboutcontent'
import Servicecontent from './components/Servicecontent'
import Contact from './components/Contact'
import Rsumecontent from "./components/Myresume"
import Projects from './components/Projects'
import Details from './pages/Details'
const App = () => {
  return (
   <>
     <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/"element={<Home/>}/>
            <Route exact path="/about"element={<Aboutcontent/>}/>
            <Route exact path="/services"element={<Servicecontent/>}/>
            <Route exact path="/projects"element={<Projects/>}/>
            <Route exact path="/resume"element={<Rsumecontent/>}/>
            <Route exact path="/contact"element={<Contact/>}/>
            <Route exact path="/:id"element={<Details/>}/>
          </Routes>
          <Footer/>
     </BrowserRouter>
   </>
  )
}

export default App
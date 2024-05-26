import React from 'react'
import {HeaderNav} from "../components/HeaderNav"
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import { Inicio } from './Inicio'
import { Portfolio } from './Portfolio'
import { Servicios } from './Servicios'
import { Curriculum } from './Curriculum'
import { Contacto } from './Contacto'
import { Footer } from './Footer'
import { Proyecto } from './Proyecto'


export const MisRutas = () => {
  return (
    <BrowserRouter>
  {/*HEADER Y NAVEGACION */}
    <HeaderNav/>

   {/*CONTENIDO CENTRAL */}
  
  

      <section className='content'>
      
            <Routes>
        <Route path='/' element={<Navigate to="/inicio"/> }/>
        <Route path='/inicio' element={<Inicio/>  }/>
        <Route path='/portafolio' element={<Portfolio />  }/>
        <Route path='/servicios' element={<Servicios/>  }/>
        <Route path='/curriculum' element={<Curriculum/>  }/>
        <Route path='/contacto' element={<Contacto/>  }/>
        <Route path="proyecto/:id" element={<Proyecto/>}/>
        <Route path="*" element={
           <div>
           <h1 className='heading'> Erorr 404</h1>  
           </div>
        } />

        </Routes>
      
        </section>
  
    {/*FOOTER */}
       <Footer/>
   

    
  </BrowserRouter>
  )
}

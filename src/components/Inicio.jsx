import React from 'react'
import { Link } from 'react-router-dom'
import { Listado} from './Listado'

export const Inicio = () => {
  return (

    <div className='home'>
     
      <h1>
        Hola, <strong>Soy Facundo Quick Zárate</strong> y Soy Diseñador en Buenos Aires, 
        y ofrezco mis servicios de  <strong>Diseño</strong> y <strong>Animación </strong>en todo tipo de proyectos.
      </h1>

    <h2 className='title'>
      Te ayudo a estilizar tu sitio o aplicación web, tener más visibilidad y relevancia en internet. <Link to="/contacto"> Contacta conmigo. </Link> 
    </h2>

    <section className='lastWorks'>
    
    <h2 className='heading'> Algunos de mis Diseños:</h2>
    
    <p>Estos son algunos de mis trabajos de diseño</p>
    

     <Listado limite="2"/>     
    
    </section>
    </div>
  )
}
  
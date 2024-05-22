import React from 'react'
import {trabajos} from "../data/trabajos"
import { Link } from 'react-router-dom'

export const Listado = ({limite}) => {
  console.log(trabajos)
  return (
    <div className='page'>
      <section className='works'>
     
      {
        trabajos.slice(0,limite).map(trabajo=>(
          <article key={trabajo.id} className='workItem'>
            <div className='mask'>
              <img src={"/images/"+ trabajo.id+ ".png"} alt={trabajo.id} />
            </div>

            <span>{trabajo.categorias}</span>
            <h2> <Link to={"/proyecto/"+ trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.descripcion}</h3>
          </article>
        ))
          
      }
      
      </section>

    </div>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const Listado = ({proyectos}) => {


  console.log(proyectos)
  return (
    <div className='page'>
      <section className='works'>
     
      {
        proyectos.map(trabajo=>(
         
          <article key={trabajo.id} className={(proyectos.length == 1)?("workItemFor1"):("workItem")}>
          <Link to={"/proyecto/"+ trabajo.id}>
            <div className='mask'>
              <img src={`/images/${trabajo.imagen}`} alt={trabajo.id} />
            </div>
          </Link>
            <span>{trabajo.fecha}</span>
            <h2> {trabajo.nombre}</h2>
            <h3>{trabajo.descripcion}</h3>
          </article>
    
        ))
          
      }
      
      </section>

    </div>
  )
}


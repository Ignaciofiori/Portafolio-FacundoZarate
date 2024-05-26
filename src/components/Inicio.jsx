import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'
import {Portfolio} from './Portfolio'
import {Buscador} from './Buscador'
import { useState } from 'react'

export const Inicio = () => {

const [proyectos,setProyectos] =useState(trabajos)

console.log(proyectos)

  return (

    <div className='home'>
     
  <div className="stars"> 

      <h1 className='title'>
       <strong>Hola,</strong> <br /> soy <strong>Facundo Quick Zárate</strong> <br />hago <strong>pensamiento estratégico</strong> y <strong>diseño creativo</strong> <br />para diversos proyectos <br />en <strong>Buenos Aires. </strong>

      </h1>

<div className="bannerWithArrow">  
    <div className='h2_container'>
    <h2 className='heading'> mi trabajo </h2>

    </div>

    <img src="images/arrowDown.png" alt="Flecha hacia abajo" className="arrowIcon" />

    </div>
    <Buscador 
              setProyectos = {setProyectos}
              proyectos ={proyectos}/>
    </div>
    <section className='lastWorks stars'>
    <Portfolio proyectos={proyectos}/>    
    
    </section>
    </div>
  )
}
  
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import {trabajos} from "../data/trabajos"

export const Proyecto = () => {
    const params = useParams()
    const [proyecto,setProyecto] = useState({})


    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id == params.id)

        setProyecto(proyecto[0])
    },[])

  return (
    <div className='page pageWork stars'>

<div className='mask'>
              <img src={"/images/"+ proyecto.imagen}  alt={proyecto.id +" imagen"}/>
            </div>
            <div className='pageWork-info'>
            <span>{proyecto.fecha}</span>
      <h1 className='heading'>{proyecto.nombre}</h1>
    <p>{proyecto.categorias}</p>
    <p>{proyecto.descripcion}</p>
    <a href={"https://"+proyecto.url} target='_blank'>Ir al Proyecto</a>
    </div>
    </div>
  )
}

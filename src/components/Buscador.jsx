import React from 'react'
import {useState} from "react"
export const Buscador = ({proyectos,setProyectos}) => {
  
const [busqueda,setBusqueda] = useState("");
const [noEncontrado, setNoEncontrado] = useState(false);
const [proyectosInicial,setProyectosInicial] = useState(proyectos);
 
  
  const buscarPeli = (e) =>{
    //Crear estado y actualizarlo
    console.log(busqueda);
  setBusqueda(e.target.value);
    //FILTRAR BUSCAR COINCIDENCIAS
    let proyectosEncontrados = proyectos.filter( proyecto =>{
      return proyecto.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });
   
    if(busqueda.length <=1 || proyectosEncontrados.length <=0){  
      console.log(proyectosEncontrados)
      proyectosEncontrados = proyectosInicial;
      setNoEncontrado(true);
      console.log(proyectosEncontrados)
    }else{

      setNoEncontrado(false);

    }
    if(busqueda ==""||busqueda.length<=1){
      setNoEncontrado(false);
    }
  setProyectos(proyectosEncontrados);

  }
  
  return (
    
    <div className='search-container'>
         
      <form  onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" 
                  id="search"
                  name='busqueda'
                  autoComplete='off'
                  value={busqueda}
                  onChange={buscarPeli}/>
                
      </form>
      {noEncontrado==true && (<span className='noEncontrado'>No Se Encontró Ninguna Coincidencia</span>)}
  
    </div>
  )


}

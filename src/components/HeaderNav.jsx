import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import PlanetIcon from '../PlanetIcon'
export const    HeaderNav = () => {
  return (
   
        <header className='headerNav'>
        
        <Link to="/" className='link-logo'>
        <div className='logo'>
          
        
           <PlanetIcon/>
      
        
        <div className='name-container'>
        <h3>
          Facundo
        </h3>
        <h3>
          Zárate 
        </h3>
        <h3>
          Diseño
        </h3>
        </div>

        </div>
        </Link>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio"  className={({isActive})=>isActive == true ? "active" : ""}> Inicio </NavLink>
                </li>
                <li>
                <NavLink to="/portafolio" className={({isActive})=>isActive == true ? "active" : ""}> Portafolio </NavLink>
                </li>
                <li>
                <NavLink to="/servicios" className={({isActive})=>isActive == true ? "active" : ""}> Servicios </NavLink>
                </li>
                <li>
                <NavLink to="/curriculum" className={({isActive})=>isActive == true ? "active" : ""}> Curriculum </NavLink>
                </li>
                <li>
                <NavLink to="/contacto" className={({isActive})=>isActive == true ? "active" : ""}> Contacto </NavLink>
                </li>
            </ul>
        </nav>

    </header>
   
  )
}

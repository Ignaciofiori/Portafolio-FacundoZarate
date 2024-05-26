import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import PlanetIcon from '../PlanetIcon'
import HouseChimney from '../HouseChimney'
import AboutMeIcon from '../AboutMeIcon'
import EnvelopeIcon from '../EnvelopeIcon'
import ClipboardIcon from '../ClipboardIcon'
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
            <ul className='ul-words'>
                <li>
                    <NavLink to="/inicio"  className={({isActive})=>isActive == true ? "active" : ""}> Inicio </NavLink>
                </li>
                <li>
                <NavLink to="/servicios" className={({isActive})=>isActive == true ? "active" : ""}> Servicios </NavLink>
                </li>
                <li>
                <NavLink to="/curriculum" className={({isActive})=>isActive == true ? "active" : ""}> Acerca de Mí </NavLink>
                </li>
                <li>
                <NavLink to="/contacto" className={({isActive})=>isActive == true ? "active" : ""}> Contacto </NavLink>
                </li>
            </ul>
            <ul className='ul-icons'>
                <li>
                    <NavLink to="/inicio"  className={({isActive})=>isActive == true ? "active" : ""}> <HouseChimney/> </NavLink>
                </li>
                <li>
                <NavLink to="/servicios" className={({isActive})=>isActive == true ? "active" : ""}> <ClipboardIcon/> </NavLink>
                </li>
                <li>
                <NavLink to="/curriculum" className={({isActive})=>isActive == true ? "active" : ""}> <AboutMeIcon/> </NavLink>
                </li>
                <li>
                <NavLink to="/contacto" className={({isActive})=>isActive == true ? "active" : ""}> <EnvelopeIcon/></NavLink>
                </li>
            </ul>
        </nav>

    </header>
   
  )
}

import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClass = isNavOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse';

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="imagen-logo">
            <Link className="navbar-brand " to='/'>
              <img src="estudio-i-f.jpeg" width="140" />
            </Link>
          </div>
          <button className="navbar-toggler" 
          type="button"  
          onClick={toggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex justify-content-end">
            <div className={navClass} id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/nuestro-estudio'>Nuestro Estudio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='#'>Servicios</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/profesionales'>Profesionales</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='#'>Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

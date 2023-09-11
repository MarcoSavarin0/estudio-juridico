import React from 'react';

const Contacto = () => {
  return (
    <div className="contacto">
      <h2 className='h2-contacto'>Contacto</h2>
      <div className='p-contacto-container'>
        <p className="contact-info"><strong><i className="fa-brands fa-instagram"></i> Contactanos por </strong><a href="https://www.instagram.com/est.jco.not/">Instagram</a></p>
        <p className="contact-info"><strong><i className="fa-brands fa-facebook"></i> Contactanos por </strong><a href="https://es-la.facebook.com/people/Estudio-Jurídico-I-F/100065188823317/">Facebook</a></p>
        <p className="contact-info"><strong>Nuestro E-Mail: </strong> <a href="mailto:est.jco.nt@hotmail.com">est.jco.nt@hotmail.com</a></p>
        <p className="contact-info"><strong>Dirección: </strong>Francia 3055, Planta baja, Oficina 1</p>
        <p className="contact-info"><strong>Número de Teléfono: </strong> (342) 612-7501</p>
      </div>
    </div>
  );
}

export default Contacto;

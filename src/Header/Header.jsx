export const Header = () => {
    return (
        <>
            <div className="estudioif">
                <header className='header-container'>
                    <div className="contenido-header d-flex flex-wrap">
                        <h1 className="h1-header">Estudio Juridico I-F <br /> & ASOSCIADOS</h1>
                        <h4 className="h4-header">
                            Atención las <strong>24hs</strong> los 365 dias del año
                        </h4>
                        <div className="div-button">
                            <button className="btn botonContacto"><a href="/Contacto" >CONTACTO</a></button>
                        </div>
                        <div className="redes-sociales">
                            <a href="https://www.instagram.com/est.jco.not/" ><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://es-la.facebook.com/people/Estudio-Jurídico-I-F/100065188823317/"><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                    <i className="fa-solid fa-arrow-down"></i>
                </header>
            </div>
        </>
    )
}

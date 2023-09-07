/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
export const Footer = () => {
    const estiloMapa = {
        width: "100%",
        height: "450px",
        border: "0",

    }
    return (
        <>
            <footer>
                <section className="google-map">

                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13587.259622025846!2d-60.7127336!3d-31.6389179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9933cce94e3%3A0x2c81a98b8aa18ba5!2sEstudio%20Juridico%20-%20Notarial%20IF!5e0!3m2!1ses-419!2sar!4v1694039624781!5m2!1ses-419!2sar" style={estiloMapa} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </section>
                <div className="infomation-footer">
                    <p><i className="fa-solid fa-location-dot"></i>Santa Fe, Argentina</p>
                    <p><i className="fa-solid fa-envelope"></i>est.jco.nt@hotmail.com</p>
                    <p><i className="fa-solid fa-phone-volume"></i>+54 3234455</p>
                </div>
                <div className="created2">
                <p className="created"> <strong>Estudio I - F © 2023</strong>  todos los derechos reservados</p>
                <p className="created" >Created, design & depoyed by <a href="https://devminds.me" target="_blank">DevMinds</a></p>
                </div>
            </footer>
        </>
    )
}

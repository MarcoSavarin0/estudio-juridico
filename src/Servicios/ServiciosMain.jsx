

export const ServiciosMain = () => {
  return (
    <>
      <section className="servicios">
        <h3 className="servicios-h3">QUE OFRECEMOS?</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-row align-items-center justify-content-around">
              <div className="container-boxService">
                <div className="servicio-box ">
                  <p>D Penal</p>
                </div>
                <div className="servicio-box">
                  <p>D Familia y Sucesiones</p>
                </div>
                <div className="servicio-box">
                  <p>D Privado</p>
                </div>
                <div className="servicio-box">
                  <p>D Daños Personales</p>
                </div>
                <div className="servicio-box">
                  <p>D Laboral</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-first imagen">
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

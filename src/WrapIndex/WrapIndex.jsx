import { Header } from "../Header/Header"
import { ServiciosMain } from "../Servicios/ServiciosMain"
import { SobreNosotros } from "../SobreNosotros/SobreNosotros"
import { Hr } from "../HrCortadorDeSection/Hr"

export const WrapIndex = () => {
    return (
        <>
            <Header />
            <ServiciosMain />
            <Hr />
            <SobreNosotros />
        </>
    )
}

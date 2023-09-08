/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"


export const ServiciosPage = () => {
    const [service, setService] = useState([]);
    const [selectedService, setSelectedService] = useState(null); // Estado para mantener un servicio seleccionado

    const serviceDescription = [
        {
            id: 1,
            name: 'D Penal',
            descripcion: 'Este servicio ofrece limpieza y mantenimiento de alta calidad para tu hogar. Un equipo de profesionales capacitados se encarga de limpiar y desinfectar cada rincón de tu casa, desde las habitaciones hasta las áreas comunes. Puedes programar limpiezas regulares o solicitar limpiezas puntuales según tus necesidades.',
        },
        {
            id: 2,
            name: 'D Familia y Sucesiones',
            descripcion: 'Un servicio de entrenamiento personalizado te brinda la atención individualizada que necesitas para alcanzar tus objetivos de fitness. Un entrenador certificado diseña programas de ejercicio específicos para ti, teniendo en cuenta tus metas, nivel de condición física y cualquier limitación. Ya sea que quieras perder peso, ganar músculo o mejorar tu salud en general, un entrenador personal te guiará hacia el éxito.',
        },
        {
            id: 3,
            name: 'D Privado',
            descripcion: 'Los servicios de consultoría financiera proporcionan asesoramiento experto en cuestiones relacionadas con las finanzas personales y empresariales. Un consultor financiero evalúa tu situación financiera actual, te ayuda a establecer metas financieras y crea un plan personalizado para alcanzarlas. También te orienta en inversiones, gestión de deudas, planificación de jubilación y estrategias fiscales.',
        },
        {
            id: 4,
            name: 'D Daños Personales',
            descripcion: 'Este servicio está diseñado para transformar tus espacios interiores en ambientes funcionales y estéticamente atractivos. Un diseñador de interiores profesional trabaja contigo para entender tus preferencias de estilo y necesidades. Luego, crea un plan de diseño que incluye selección de colores, mobiliario, decoración y disposición de los elementos para lograr un espacio armonioso y personalizado.',
        },
        {
            id: 5,
            name: 'D Laboral',
            descripcion: 'Cuando tus electrodomésticos dejan de funcionar correctamente, un servicio de reparación de electrodomésticos puede ser una solución rápida y económica. Técnicos especializados en reparaciones de electrodomésticos diagnosticarán y repararán problemas con tus dispositivos, como lavadoras, refrigeradores o hornos. Esto te permite evitar el costo de reemplazarlos y prolongar su vida útil.',
        },
    ];

    useEffect(() => {
        setService(serviceDescription);
    }, []);
    const showService = (service) => {
        setSelectedService(service);
    };

    return (
        <>
            <div className="service-page-container">
                <div className="button-service-page"> 
                    {service.map((item) => ( 
                            <button className="btn btn-primary"  key={item.id} onClick={() => showService(item)}>{item.name}</button>
                    ))}
               </div>
                {selectedService && (
                    <div className="descripcion-service-container">
                        <h2>{selectedService.name}</h2>
                        <p>{selectedService.descripcion}</p>
                    </div>
                )}
            </div>
        </>
    )
}

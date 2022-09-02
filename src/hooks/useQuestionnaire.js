import { useState } from "react"

export const useQuestionnaire = () => {
    const [datosPersonales, setdatosPersonales] = useState({
        nombres: '',
        apellidos: '',
        telefono: 0,
        correo: ''
    });

    const [pagina, setPagina] = useState(1)

    const setDatosPersonales = ({
        nombres ='',
        apellidos= '',
        telefono =0,
        correo = ''
    }) =>{
        setdatosPersonales({
          nombres: nombres,
          apellidos:apellidos,
          telefono: telefono,
          correo: correo,
        });
    }



    return {
        datosPersonales: datosPersonales,
        pagina: pagina, 
        setDatosPersonales
    }

}

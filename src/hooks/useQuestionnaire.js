import { useState } from "react"

export const useQuestionnaire = () => {
    const [datosPersonales, setdatosPersonales] = useState({
        nombres: '',
        apellidos: '',
        telefono: 0,
        correo: ''
    });

    const [datosActividades, setdatosActividades] = useState({
        actvidaades: '',
        tiempo: '',
        interes: '',
        dejar: ''
    })

    const [pagina, setPagina] = useState(1)

    const setDatosPersonales = async ({
        nombres ='',
        apellidos= '',
        telefono =0,
        correo = ''
    }) =>{
        await setdatosPersonales({
          nombres: nombres,
          apellidos:apellidos,
          telefono: telefono,
          correo: correo,
        });
    }

    const setDatosActividades = async ({
        actvidaades= '',
        tiempo= '',
        interes= '',
        dejar= ''
    })=>{
        await setdatosActividades({
          actvidaades: actvidaades,
          tiempo: tiempo,
          interes: interes,
          dejar: dejar,
        });
    }

    console.log(datosPersonales);   

    const nextPage = async (page) => {
        await setPagina(page)
    }

    console.log(pagina)



    return {
        datosPersonales: datosPersonales,
        datosActividades: datosActividades,
        pagina: pagina, 
        setDatosActividades,
        setDatosPersonales,
        nextPage
    }

}

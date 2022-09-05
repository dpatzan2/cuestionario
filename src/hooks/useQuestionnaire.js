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
    });

    const [datosJuegos, setdatosJuegos] = useState({
        gustar: '',
        juegos: '',
        tiempo: '',
        interes: '',
    });


    const [datosPeliculas, setdatosPeliculas] = useState({
      gustar: "",
      peliculas: "",
      tiempo: "",
      interes: "",
    });

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

    const setDatosJuegos = async ({
        gustar ='',
        juegos ='',
        tiempo = '',
        interes = '',
    }) => {
        await setdatosJuegos({
          gustar: gustar,
          juegos: juegos,
          tiempo: tiempo,
          interes: interes,
        });
    }

    const setDatosPeliculas = async({
      gustar= "",
      peliculas = "",
      tiempo ="",
      interes ="",
    }) => {
        await setdatosPeliculas({
          gustar: gustar,
          peliculas: peliculas,
          tiempo: tiempo,
          interes: interes,
        });
    };

    const nextPage = async (page) => {
        await setPagina(page)
    }

    console.log(pagina)



    return {
        datosPersonales: datosPersonales,
        datosActividades: datosActividades,
        datosJuegos: datosJuegos,
        datosPeliculas: datosPeliculas,
        pagina: pagina, 
        setDatosActividades,
        setDatosPersonales,
        setDatosJuegos,
        setDatosPeliculas,
        nextPage
    }

}

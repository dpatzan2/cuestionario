import React from 'react'
import { ActividadesFavoritas } from './components/ActividadesFavoritas';
import { DatosPersonales } from './components/DatosPersonales';
import { Juegos } from './components/Juegos';
import { useQuestionnaire } from './hooks/useQuestionnaire';

export const Formulario = () => {
  const { datosPersonales, datosActividades, datosJuegos, pagina, nextPage, setDatosPersonales, setDatosActividades, setDatosJuegos} = useQuestionnaire();
  console.log(datosPersonales);

  const onSubmitDataPersonal = async (nombres, apellidos, telefono, correo, pagina) => {
        await setDatosPersonales({
          nombres: nombres,
          apellidos: apellidos,
          telefono: telefono,
          correo: correo,
        });
        continuePage(pagina)
  }

  const onSubmitDataActividad = async (actvidaades, tiempo, interes, dejar, pagina) => {
    await setDatosActividades({
      actvidaades: actvidaades,
      tiempo: tiempo,
      interes: interes,
      dejar: dejar,
    });
    continuePage(pagina);
  };

  const onSubmitDataJuegos = async (gustar,juegos,tiempo,interes, pagina) => {
    await setDatosJuegos({
      gustar: gustar,
      juegos: juegos,
      tiempo: tiempo,
      interes: interes,
    });
    continuePage(pagina);
  }

  const continuePage = async (page) => {
    await nextPage(page);
  }

  const previousPage = async (page) => {
    await nextPage(page);
  };

    switch (pagina) {
      case 1:
        return (
          <DatosPersonales onSubmitDataPersonal={onSubmitDataPersonal} datosPersonales={datosPersonales} />
        );
        break;
      case 2:
        return (
          <ActividadesFavoritas onSubmitDataActividad={onSubmitDataActividad} previousPage={previousPage} datosActividades={datosActividades}/>
        )
        break;
      case 3:
        return (
          <Juegos onSubmitDataJuegos={onSubmitDataJuegos} previousPage={previousPage} datosJuegos={datosJuegos}/>
        )
      default:
        return;
        break;
    }

    
}

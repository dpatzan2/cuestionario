import React from 'react'
import { ActividadesFavoritas } from './components/ActividadesFavoritas';
import { DatosPersonales } from './components/DatosPersonales';
import { useQuestionnaire } from './hooks/useQuestionnaire';

export const Formulario = () => {
  const { datosPersonales, datosActividades, pagina, nextPage, setDatosPersonales, setDatosActividades} = useQuestionnaire();
  console.log(datosPersonales);

  const onSubmitDataPersonal = async (nombres, apellidos, telefono, correo) => {
        await setDatosPersonales({
          nombres: nombres,
          apellidos: apellidos,
          telefono: telefono,
          correo: correo,
        });
        continuePage(2)
  }

  const onSubmitDataActividad = async (actvidaades, tiempo, interes, dejar) => {
    await setDatosActividades({
      actvidaades: actvidaades,
      tiempo: tiempo,
      interes: interes,
      dejar: dejar,
    });
    continuePage(3);
  };

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
      default:
        return;
        break;
    }

    
}

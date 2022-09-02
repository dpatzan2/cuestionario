import React from 'react'
import { ActividadesFavoritas } from './components/ActividadesFavoritas';
import { DatosPersonales } from './components/DatosPersonales';
import { useQuestionnaire } from './hooks/useQuestionnaire';

export const Formulario = () => {
  const { datosPersonales, pagina, nextPage, setDatosPersonales} = useQuestionnaire();
  console.log(datosPersonales);

  const onSubmitDataPersonal = async (nombres, apellidos, telefono, correo) => {
        console.log(nombres)
        await setDatosPersonales({
          nombres: nombres,
          apellidos: apellidos,
          telefono: telefono,
          correo: correo,
        });
        continuePage(2)
        onResetForm();
  }

  const onSubmitDataActividad = async() => {

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
          <>
            <DatosPersonales onSubmitDataPersonal={onSubmitDataPersonal} datosPersonales={datosPersonales} />
          </>
        );
        break;
      case 2:
        return (
          <ActividadesFavoritas onSubmitDataActividad={onSubmitDataActividad} previousPage={previousPage} />
        )
        break;
      default:
        return;
        break;
    }

    
}

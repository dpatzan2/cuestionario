import React from 'react'
import { ActividadesFavoritas } from './components/ActividadesFavoritas';
import { DatosPersonales } from './components/DatosPersonales';
import { Juegos } from './components/Juegos';
import { Peliculas } from './components/Peliculas';
import { Series } from './components/Series';
import { useQuestionnaire } from './hooks/useQuestionnaire';

export const Formulario = () => {
  const { datosPersonales, datosActividades, datosJuegos, datosPeliculas, datosSeries, pagina, nextPage, setDatosPersonales, setDatosActividades, setDatosJuegos, setDatosPeliculas, setDatosSeries} = useQuestionnaire();

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

  const onSubmitDataPeliculas = async (gustar,peliculas,tiempo,interes, pagina) => {
    await setDatosPeliculas({
      gustar: gustar,
      peliculas: peliculas,
      tiempo: tiempo,
      interes: interes,
    });
    continuePage(pagina);
  }

  const onSubmitDataSeries = async (gustar,series,tiempo,interes, pagina) => {
    await setDatosSeries({
      gustar: gustar,
      series: series,
      tiempo: tiempo,
      interes: interes,
    });
    continuePage(pagina);
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
      case 3:
        return (
          <Juegos onSubmitDataJuegos={onSubmitDataJuegos} previousPage={previousPage} datosJuegos={datosJuegos}/>
        )
        break;
      case 4:
        return (
          <Peliculas onSubmitDataPeliculas={onSubmitDataPeliculas} previousPage={previousPage} datosPeliculas={datosPeliculas}/>
        )
      case 5:
        return (
          <Series onSubmitDataSeries={onSubmitDataSeries} previousPage={previousPage} datosSeries={datosSeries}/>
        )
      default:
        return;
        break;
    }

    
}

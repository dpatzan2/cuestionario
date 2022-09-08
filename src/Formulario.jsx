import React from "react";
import { ActividadesFavoritas } from "./components/ActividadesFavoritas";
import { DatosPersonales } from "./components/DatosPersonales";
import { EnvioFormulario } from "./components/EnvioFormulario";
import { Juegos } from "./components/Juegos";
import { Peliculas } from "./components/Peliculas";
import { Series } from "./components/Series";
import { useQuestionnaire } from "./hooks/useQuestionnaire";

export const Formulario = () => {
  const {
    datosPersonales,
    datosActividades,
    datosJuegos,
    datosPeliculas,
    datosSeries,
    pagina,
    setDatosPersonales,
    setDatosActividades,
    setDatosJuegos,
    setDatosPeliculas,
    setDatosSeries,
  } = useQuestionnaire();

  switch (pagina) {
    case 1:
      return (
        <DatosPersonales
          setDatosPersonales={setDatosPersonales}
          datosPersonales={datosPersonales}
        />
      );
      break;
    case 2:
      return (
        <ActividadesFavoritas
          onSubmitDataActividad={setDatosActividades}
          datosActividades={datosActividades}
        />
      );
      break;
    case 3:
      return (
        <Juegos onSubmitDataJuegos={setDatosJuegos} datosJuegos={datosJuegos} />
      );
      break;
    case 4:
      return (
        <Peliculas
          onSubmitDataPeliculas={setDatosPeliculas}
          datosPeliculas={datosPeliculas}
        />
      );
    case 5:
      return (
        <Series onSubmitDataSeries={setDatosSeries} datosSeries={datosSeries} />
      );
    case 6:
      return (
        <EnvioFormulario
          datosPersonales={datosPersonales}
          datosActividades={datosActividades}
          datosJuegos={datosJuegos}
          datosPeliculas={datosPeliculas}
          datosSeries={datosSeries}
        />
      );
    default:
      return;
      break;
  }
};

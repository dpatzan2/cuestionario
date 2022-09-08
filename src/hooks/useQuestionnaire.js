import { useState } from "react";

export const useQuestionnaire = () => {
  const [datosPersonales, setdatosPersonales] = useState({
    nombres: "",
    apellidos: "",
    telefono: 0,
    correo: "",
  });

  const [datosActividades, setdatosActividades] = useState({
    actvidaades: "",
    tiempo: "",
    interes: "",
    dejar: "",
  });

  const [datosJuegos, setdatosJuegos] = useState({
    gustar: "",
    juegos: "",
    tiempo: "",
    interes: "",
  });

  const [datosPeliculas, setdatosPeliculas] = useState({
    gustar: "",
    peliculas: "",
    tiempo: "",
    interes: "",
  });

  const [datosSeries, setdatosSeries] = useState({
    gustar: "",
    series: "",
    tiempo: "",
    interes: "",
  });

  const [pagina, setPagina] = useState(1);

  const setDatosPersonales = async (
    nombres = "",
    apellidos = "",
    telefono = "",
    correo = "",
    pagina
  ) => {
    await setdatosPersonales({
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      correo: correo,
    });
    nextPage(pagina);
  };

  const setDatosActividades = async (
    actvidaades = "",
    tiempo = "",
    interes = "",
    dejar = "",
    pagina
  ) => {
    await setdatosActividades({
      actvidaades: actvidaades,
      tiempo: tiempo,
      interes: interes,
      dejar: dejar,
    });
    nextPage(pagina);
  };

  const setDatosJuegos = async (
    gustar = "",
    juegos = "",
    tiempo = "",
    interes = "",
    pagina
  ) => {
    await setdatosJuegos({
      gustar: gustar,
      juegos: juegos,
      tiempo: tiempo,
      interes: interes,
    });
    nextPage(pagina);
  };

  const setDatosPeliculas = async (
    gustar = "",
    peliculas = "",
    tiempo = "",
    interes = "",
    pagina
  ) => {
    await setdatosPeliculas({
      gustar: gustar,
      peliculas: peliculas,
      tiempo: tiempo,
      interes: interes,
    });
    nextPage(pagina);
  };

  const setDatosSeries = async (
    gustar = "",
    series = "",
    tiempo = "",
    interes = "",
    pagina
  ) => {
    await setdatosSeries({
      gustar: gustar,
      series: series,
      tiempo: tiempo,
      interes: interes,
    });
    nextPage(pagina);
  };

  const nextPage = async (page) => {
    await setPagina(page);
  };

  return {
    datosPersonales: datosPersonales,
    datosActividades: datosActividades,
    datosJuegos: datosJuegos,
    datosPeliculas: datosPeliculas,
    datosSeries: datosSeries,
    pagina: pagina,
    setDatosActividades,
    setDatosPersonales,
    setDatosJuegos,
    setDatosPeliculas,
    setDatosSeries,
  };
};

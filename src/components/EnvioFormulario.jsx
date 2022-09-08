import React from "react";

export const EnvioFormulario = ({
  datosPersonales,
  datosActividades,
  datosJuegos,
  datosPeliculas,
  datosSeries,
}) => {
  return (
    <>
      <section id="Contenido">
        <article>
          <header>
            <h1 id="categoria">Datos finales</h1>
          </header>
          <div className="contenido">
            <h3>Datos personales</h3>
            <br />
            <div className="form">
              <li className="list-group-item">
                <b>Nombres: </b> {datosPersonales.nombres}{" "}
                {datosPersonales.apellidos}
              </li>
              <li className="list-group-item">
                <b>Numero de telefono: </b> {datosPersonales.telefono}
              </li>
              <li className="list-group-item">
                <b>Correo electronico: </b> {datosPersonales.correo}
              </li>
            </div>
            <br />
            <hr />
            <br />
            <h3>Actividades</h3>
            <br />
            <div className="form">
              <li className="list-group-item">
                <b>Actividades favoritas: </b> {datosActividades.actvidaades}
              </li>
              <li className="list-group-item">
                <b>Tiempo que le dedica a estas: </b> {datosActividades.tiempo}
              </li>
              <li className="list-group-item">
                <b>Actividades que le interesan: </b> {datosActividades.interes}
              </li>
              <li className="list-group-item">
                <b>Actividades que desea dejar: </b> {datosActividades.dejar}
              </li>
            </div>
            <br />
            <hr />
            <br />
            <h3>Juegos</h3>
            <br />
            <div className="form">
              <li className="list-group-item">
                <b>Le gustan los video juegos?: </b> {datosJuegos.gustar}
              </li>
              <li className="list-group-item">
                <b>Juegos que juega: </b> {datosJuegos.juegos}
              </li>
              <li className="list-group-item">
                <b>Tiempo que le dedica a estas: </b> {datosJuegos.tiempo}
              </li>
              <li className="list-group-item">
                <b>Juegos que le interesan: </b> {datosJuegos.interes}
              </li>
            </div>
            <br />
            <hr />
            <br />
            <h3>Peliculas</h3>
            <br />
            <div className="form">
              <li className="list-group-item">
                <b>Le gustan las peliculas?: </b> {datosPeliculas.gustar}
              </li>
              <li className="list-group-item">
                <b>Peliculas que le gustan: </b> {datosPeliculas.peliculas}
              </li>
              <li className="list-group-item">
                <b>Tiempo que le dedica a estas: </b> {datosPeliculas.tiempo}
              </li>
              <li className="list-group-item">
                <b>Peliculas que le interesan: </b> {datosPeliculas.interes}
              </li>
            </div>
            <br />
            <hr />
            <br />
            <h3>Series</h3>
            <br />
            <div className="form">
              <li className="list-group-item">
                <b>Le gustan las series?: </b> {datosSeries.gustar}
              </li>
              <li className="list-group-item">
                <b>Series que le gustan: </b> {datosSeries.series}
              </li>
              <li className="list-group-item">
                <b>Tiempo que le dedica a estas: </b> {datosSeries.tiempo}
              </li>
              <li className="list-group-item">
                <b>Series que le interesan: </b> {datosSeries.interes}
              </li>
            </div>
            <br />
          </div>
        </article>
      </section>
    </>
  );
};

import React from "react";
import { useForm } from "../hooks/useForm";

export const Peliculas = ({ onSubmitDataPeliculas, datosPeliculas }) => {
  const { gustar, peliculas, tiempo, interes, onInputChange } = useForm({
    gustar: datosPeliculas.gustar,
    peliculas: datosPeliculas.peliculas,
    tiempo: datosPeliculas.tiempo,
    interes: datosPeliculas.interes,
  });

  const regresar = () => {
    onSubmitDataPeliculas(gustar, peliculas, tiempo, interes, 3);
  };

  return (
    <>
      <section id="Contenido">
        <article>
          <header>
            <h1 id="categoria">Peliculas</h1>
          </header>
          <div className="contenido">
            <div className="form">
              <form>
                <p>Te gustan las peliculas?:</p>
                <div className="radios">
                  <div className="radios-buttons">
                    <input
                      type="radio"
                      id="gustar"
                      name="gustar"
                      value="Si"
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="radios-buttons">
                    <label for="gustar">Si</label>
                  </div>
                  <div className="radios-buttons">
                    <input
                      type="radio"
                      id="gustar"
                      name="gustar"
                      value="No"
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="radios-buttons">
                    <label for="gustar">No</label>
                  </div>
                </div>

                <label className="text-form" for="pass">
                  Que peliculas te gustan?
                </label>
                <input
                  type="text"
                  id="peliculas"
                  name="peliculas"
                  placeholder="Ingresa las peliculas que te gustan"
                  value={peliculas}
                  onChange={onInputChange}
                  required
                />

                <label for="telefono">
                  Cuanto tiempo le dedicas a esta actividad al dia?
                </label>
                <input
                  type="text"
                  id="tiempo"
                  name="tiempo"
                  placeholder="Ingresa el tiempo, ejemplo 3-4 horas al dia"
                  value={tiempo}
                  onChange={onInputChange}
                  required
                />

                <label for="correo">Que peliculas te llaman la atencion?</label>
                <input
                  type="text"
                  id="interes"
                  name="interes"
                  placeholder="Ingresa que peliculas te llaman la atencion"
                  value={interes}
                  onChange={onInputChange}
                  required
                />
                <button className="buttons" onClick={() => regresar()}>
                  Anterior
                </button>
                <button
                  className="buttons"
                  onClick={() =>
                    onSubmitDataPeliculas(gustar, peliculas, tiempo, interes, 5)
                  }
                >
                  Siguiente
                </button>
              </form>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

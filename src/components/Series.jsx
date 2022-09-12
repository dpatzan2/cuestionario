import React from "react";
import { useForm } from "../hooks/useForm";

export const Series = ({ onSubmitDataSeries, datosSeries }) => {
  let { gustar, series, tiempo, interes, onInputChange } = useForm({
    gustar: datosSeries.gustar,
    series: datosSeries.series,
    tiempo: datosSeries.tiempo,
    interes: datosSeries.interes,
  });

  if(gustar === 'No'){
    series = '',
    tiempo = '',
    interes = ''
  }



  const regresar = () => {
    onSubmitDataSeries(gustar, series, tiempo, interes, 4);
  };

  return (
    <>
      <section id="Contenido">
        <article>
          <header>
            <h1 id="categoria">Series</h1>
          </header>
          <div className="contenido">
            <div className="form">
              <form>
                <p>Te gustan las series?:</p>
                <div className="radios">
                  <div className="radios-buttons">
                    <input
                      type="radio"
                      id="gustar"
                      name="gustar"
                      value="Si"
                      onChange={onInputChange}
                      checked={gustar === "Si" ? true : false}
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
                      checked={gustar === "No" ? true : false}
                    />
                  </div>
                  <div className="radios-buttons">
                    <label for="gustar">No</label>
                  </div>
                </div>

                <label for="pass">Que series te gustan?</label>
                <input
                  type="text"
                  id="series"
                  name="series"
                  placeholder="Ingresa las series que te gustan"
                  value={series}
                  onChange={onInputChange}
                  disabled={gustar === "No" ? true : false}
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
                  disabled={gustar === "No" ? true : false}
                  required
                />

                <label for="correo">Que series te llaman la atencion?</label>
                <input
                  type="text"
                  id="interes"
                  name="interes"
                  placeholder="Ingresa que series te llaman la atencion"
                  value={interes}
                  onChange={onInputChange}
                  disabled={gustar === "No" ? true : false}
                  required
                />
                <div className="contenedor-buttons">
                  <button className="buttons" onClick={() => regresar()}>
                    Anterior
                  </button>
                  <button
                    className="buttons"
                    onClick={() =>
                      onSubmitDataSeries(gustar, series, tiempo, interes, 6)
                    }
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

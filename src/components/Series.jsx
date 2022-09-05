import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const Series = ({onSubmitDataSeries, previousPage, datosSeries}) => {

    const { gustar,series,tiempo,interes, onInputChange, onResetForm } = useForm({
        gustar: datosSeries.gustar,
        series: datosSeries.series,
        tiempo: datosSeries.tiempo,
        interes: datosSeries.interes,
    });    

    const regresar = () => {
      onSubmitDataSeries(gustar, series, tiempo, interes, 4);
    }

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
                    <input type="radio" id="gustar" name="gustar" value="Si" onChange={onInputChange}  />
                    <label for="gustar">Si</label>

                    <input type="radio" id="gustar" name="gustar" value="No" onChange={onInputChange}/>
                    <label for="gustar">No</label>
                  </div>

                  <label for="pass">Que peliculas te gustan?</label>
                  <input
                    type="text"
                    id="series"
                    name="series"
                    placeholder="Ingresa las series que te gustan"
                    value={series}
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

                  <label for="correo">
                    Que series te llaman la atencion?
                  </label>
                  <input
                    type="text"
                    id="interes"
                    name="interes"
                    placeholder="Ingresa que series te llaman la atencion"
                    value={interes}
                    onChange={onInputChange}
                    required
                  />
                  <button
                    onClick={() =>
                      onSubmitDataSeries(gustar, series, tiempo, interes, 6)
                    }
                  >
                    Enviar
                  </button>
                  <button onClick={() => regresar()}>Anterior</button>
                </form>
              </div>
            </div>
          </article>
        </section>
      </>
    );
}

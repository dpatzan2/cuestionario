import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const Juegos = ({onSubmitDataJuegos, previousPage, datosJuegos}) => {

    const { gustar, juegos, tiempo, interes, onInputChange, onResetForm } = useForm({
        gustar: datosJuegos.gustar,
        juegos: datosJuegos.juegos,
        tiempo: datosJuegos.tiempo,
        interes: datosJuegos.interes,
    });    

    const regresar = () => {
      onSubmitDataJuegos(gustar, juegos, tiempo, interes, 2);
    }

    return (
      <>
        <section id="Contenido">
          <article>
            <header>
              <h1 id="categoria">Juegos</h1>
            </header>
            <div className="contenido">
              <div className="form">
                <form>
                  <p>Te gustan los video juegos?:</p>
                  <div className="radios">
                    <input type="radio" id="gustar" name="gustar" value="Si" onChange={onInputChange}  />
                    <label for="gustar">Si</label>

                    <input type="radio" id="gustar" name="gustar" value="No" onChange={onInputChange}/>
                    <label for="gustar">No</label>
                  </div>

                  <label for="pass">Que video juegos te gustan?</label>
                  <input
                    type="text"
                    id="juegos"
                    name="juegos"
                    placeholder="Ingresa los video juegos que te gustan"
                    value={juegos}
                    onChange={onInputChange}
                    required
                  />

                  <label for="telefono">
                    Cuanto tiempo le dedicas a estos al dia?
                  </label>
                  <input
                    type="text"
                    id="tiempo"
                    name="tiempo"
                    placeholder="Ingresa el tiempo, ejemplo 3-4 horas"
                    value={tiempo}
                    onChange={onInputChange}
                    required
                  />

                  <label for="correo">
                    Que juegos te llaman la atencion de probar?
                  </label>
                  <input
                    type="text"
                    id="interes"
                    name="interes"
                    placeholder="Ingresa que video juegos te llaman la atencion"
                    value={interes}
                    onChange={onInputChange}
                    required
                  />
                  <button
                    onClick={() =>
                      onSubmitDataJuegos(gustar, juegos, tiempo, interes,4)
                    }
                  >
                    Siguiente
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

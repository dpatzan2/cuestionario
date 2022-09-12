import React from "react";
import { useForm } from "../hooks/useForm";

export const Juegos = ({ onSubmitDataJuegos, datosJuegos }) => {
  let { gustar, juegos, tiempo, interes, onInputChange } = useForm({
    gustar: datosJuegos.gustar,
    juegos: datosJuegos.juegos,
    tiempo: datosJuegos.tiempo,
    interes: datosJuegos.interes,
  });


  if(gustar === 'No'){
    juegos = '',
    tiempo = '',
    interes = ''
  }

  const regresar = () => {
    onSubmitDataJuegos(gustar, juegos, tiempo, interes, 2);
  };

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

                <label for="pass">Que video juegos te gustan?</label>
                <input
                  type="text"
                  id="juegos"
                  name="juegos"
                  placeholder="Ingresa los video juegos que te gustan"
                  value={juegos}
                  onChange={onInputChange}
                  disabled={gustar === "No" ? true : false}
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
                  disabled={gustar === "No" ? true : false}
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
                      onSubmitDataJuegos(gustar, juegos, tiempo, interes, 4)
                    }
                  >
                    Siguiente
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

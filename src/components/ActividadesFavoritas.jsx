import React from "react";
import { useForm } from "../hooks/useForm";

export const ActividadesFavoritas = ({
  onSubmitDataActividad,
  datosActividades,
}) => {
  const { actvidaades, tiempo, interes, dejar, onInputChange } = useForm({
    actvidaades: datosActividades.actvidaades,
    tiempo: datosActividades.tiempo,
    interes: datosActividades.interes,
    dejar: datosActividades.dejar,
  });

  const regresar = () => {
    onSubmitDataActividad(actvidaades, tiempo, interes, dejar, 1);
  };

  return (
    <>
      <section id="Contenido">
        <article>
          <header>
            <h1 id="categoria">Actividades favoritas</h1>
          </header>
          <div className="contenido">
            <div className="form">
              <form>
                <label for="nombre">
                  Cuales son tus actividades favoritas?
                </label>
                <input
                  type="text"
                  id="actvidaades"
                  name="actvidaades"
                  placeholder="Ingresa tus actividades favoritas"
                  value={actvidaades}
                  onChange={onInputChange}
                  required
                />

                <label for="pass">
                  Cuanto tiempo le dedicas a estas actividades?
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

                <label for="telefono">
                  Que actividades te llaman la atencion y por que?
                </label>
                <input
                  type="text"
                  id="interes"
                  name="interes"
                  placeholder="Ingresa actividades de tu interes"
                  value={interes}
                  onChange={onInputChange}
                  required
                />

                <label for="correo">
                  Que activdades te gustaria dejar de hacer?
                </label>
                <input
                  type="text"
                  id="dejar"
                  name="dejar"
                  placeholder="Ingresa las actividades que deseas dejar"
                  value={dejar}
                  onChange={onInputChange}
                  required
                />
                <button className="buttons" onClick={() => regresar()}>
                  Anterior
                </button>
                <button
                  className="buttons"
                  onClick={() =>
                    onSubmitDataActividad(
                      actvidaades,
                      tiempo,
                      interes,
                      dejar,
                      3
                    )
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

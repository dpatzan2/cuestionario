import React from "react";
import { useForm } from "../hooks/useForm";

export const DatosPersonales = ({ setDatosPersonales, datosPersonales }) => {
  const { nombres, apellidos, telefono, correo, onInputChange } = useForm({
    nombres: datosPersonales.nombres,
    apellidos: datosPersonales.apellidos,
    telefono: datosPersonales.telefono,
    correo: datosPersonales.correo,
  });
  return (
    <>
      <section id="Contenido">
        <article>
          <header>
            <h1 id="categoria">Información personal</h1>
          </header>
          <div className="contenido">
            <div className="form">
              <form>
                <label for="nombre">Nombres</label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  placeholder="Ingresa tu nombres"
                  value={nombres}
                  onChange={onInputChange}
                  required
                />

                <label for="pass">Apellidos</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  placeholder="Ingresa tys apellidos"
                  value={apellidos}
                  onChange={onInputChange}
                  required
                />

                <label for="telefono">Numero de telefono</label>
                <input
                  type="number"
                  id="telefono"
                  name="telefono"
                  placeholder="Ingresa el numero de telefono"
                  value={telefono}
                  onChange={onInputChange}
                  required
                />

                <label for="correo">Correo</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Ingresa el correo"
                  value={correo}
                  onChange={onInputChange}
                  required
                />
                <div className="contenedor-buttons">
                  <button
                    className="buttons"
                    onClick={() =>
                      setDatosPersonales(
                        nombres,
                        apellidos,
                        telefono,
                        correo,
                        2
                      )
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

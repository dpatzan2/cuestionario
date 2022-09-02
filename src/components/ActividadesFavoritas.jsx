import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const ActividadesFavoritas = ({onSubmitDataActividad, previousPage}) => {

    const { nombres, apellidos, telefono, correo, onInputChange, onResetForm } = useForm({
        nombres: '',
        apellidos: '',
        telefono: 0,
        correo: ''
    });    

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
                  <label for="nombre">Cuales son tus actividades favoritas?</label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    placeholder="Ingresa tus actividades favoritas"
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
                  <button onClick={() => onSubmitDataPersonal(nombres, apellidos, telefono, correo)}>Siguiente</button>
                  <button onClick={() => previousPage(1)}>Anterios</button>
                </form>
              </div>
            </div>
          </article>
        </section>
      </>
    );
}

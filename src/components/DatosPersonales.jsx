import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import { useQuestionnaire } from '../hooks/useQuestionnaire';

export const DatosPersonales = () => {

    const { nombres, apellidos, telefono, correo, onInputChange, onResetForm } = useForm({
        nombres: '',
        apellidos: '',
        telefono: 0,
        correo: ''
    });

    const { datosPersonales, setDatosPersonales } = useQuestionnaire();

    

    const onSubmitData = () => {
        console.log(nombres)
        setDatosPersonales({
          nombres: nombres,
          apellidos: apellidos,
          telefono: telefono,
          correo: correo,
        });
        onResetForm();
    }


    // useEffect(() => {
    //   onSubmitData();
    // }, [])

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
                  <button
                    onClick={() =>
                      onSubmitData()
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
}

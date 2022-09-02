import React from 'react'

export const DatosPersonales = () => {
    return (
      <>
        <section id="Contenido">
          <article>
            <header>
              <h1 id="categoria">Información personal</h1>
            </header>
            <div class="contenido">
              <div class="form">
                <form>
                  <label for="nombre">Nombres</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingresa tu nombres"
                    required
                  />

                  <label for="pass">Apellidos</label>
                  <input
                    type="text"
                    id="pass"
                    name="pass"
                    placeholder="Ingresa tys apellidos"
                    required
                  />

                  <label for="telefono">Numero de telefono</label>
                  <input
                    type="number"
                    id="telefono"
                    name="telefono"
                    placeholder="Ingresa el numero de telefono"
                    required
                  />

                  <label for="correo">Correo</label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="Ingresa el correo"
                    required
                  />
                  <button>Siguiente</button>
                </form>
              </div>
            </div>
          </article>
        </section>
      </>
    );
}

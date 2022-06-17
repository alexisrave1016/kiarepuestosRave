import React from 'react'

export default function Registro() {
  return (
    <div>
          <form>
                <h1 className="">
                    ¡Registrate en nuestro sistema!
                </h1>
                <div className="">
                    <img 
                    src=""
                    alt="imagen no disponible"
                    /> 
                    <h3>Crea una cuenta</h3>
                </div>

                <input
                    type="text"
                    placeholder="Nombres"
                    name="nombres"
                    className="form-control"
                    autoComplete="off"

                />

                <input
                    type="text"
                    placeholder="Apellidos"
                    name="apellidos"
                    className="form-control"
                    autoComplete="off"
                />

                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="nombre"
                />

                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required=""

                />

                <input
                    type="Password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                />
              
                <button
                    type="submit"
                    className=""
                >
                    Register
                </button>
               
                <span>
                    Already registered?
                </span>
            </form>
    </div>
  )
}

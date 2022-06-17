import React from 'react'
import { Link } from 'react-router-dom'
import '../css/registro.css'

export default function Registro() {
  return (
    <div className='contenedor-registro'>

            <Link to='/'>
            <img
                className='logo-empresa'
                src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655339587/kiarepuestos/logoTrasparente_smlrzs.png"
                alt="imagen no disponible"
            /></Link> 
            <form className='formulario-registro'>
                <h1 className="titulo">
                    ¡Registrate en nuestro sistema!
                </h1>
        
                <input
                    type="text"
                    placeholder="Nombres"
                    name="nombres"
                    className="informacion-usuario"
                    autoComplete="off"

                />

                <input
                    type="text"
                    placeholder="Apellidos"
                    name="apellidos"
                    className="informacion-usuario"
                    autoComplete="off"
                />

                <input
                    type="text"
                    name="celular"
                    className="informacion-usuario"
                    placeholder="Celular"
                />

                <input
                    type="email"
                    name="email"
                    className="informacion-usuario"
                    placeholder="Email"
                
                />

                <input
                    type="Password"
                    name="password"
                    className="informacion-usuario"
                    placeholder="Password"
                />
              
                <button
                    type="submit"
                    className="informacion-usuario enviar"
                >
                    Registrarse
                </button>
               
                <Link to='/login'><span className='regreso-login'>Ya estas Registrado</span></Link>
            </form>

            <div className="marcas">
                <img className='img-marca kia' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655270837/kiarepuestos/Logokia_inv5ts.png" alt="marca no disponible" />
                <img className='img-marca' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655271861/kiarepuestos/1222940_ttcfdx.png" alt="marca no disponible" />
            </div>
    </div>
  )
}

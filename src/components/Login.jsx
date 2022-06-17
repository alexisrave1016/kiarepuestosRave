import React from 'react'
import { Link } from 'react-router-dom'
import '../css/login.css'

export default function Login() {
  return (
    <div className="login-contenedor-principal">
         <form className='formulario' >
             <img className='logo-principal' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655339587/kiarepuestos/logoTrasparente_smlrzs.png" alt="logo no disponible" />
             <div className="contenedor-login">
                    <h1 className='titulo-inicio-sesion'>
                        Inicio de sesión
                    </h1>
                    <span className='informacion'>Direccion de correo electronico</span>
                    <input
                        type="email"
                        id="inputEmail"
                        placeholder="Email"
                        className='datos-usuario'
                    />

                    <input
                        type="Password"
                        id="inputPassword"
                        placeholder="Contreña"
                        className='datos-usuario'
                    />

                    <button className='enviar-datos' type="submit"> Continuar </button>

                    <div className="login-redes">
                        <span className='informacion'>Iniciar sesión con redes sociales</span>

                        <div className="redes-sociales">
                            <div className="opcion-redes">
                                <img className="logo-redes" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632601095/sprint3/google-logo_cqfi6y.png" alt="google button" />
                                <img className='logo-redes' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1636559179/logo-facebook_yvwgc5.png" alt="no disponible" />
                            </div>
                            
                        </div>
                    </div>

                   <Link to='/registro' className='link'><button className='enviar-datos' type='submit'>Crear nuevo Usuario</button></Link> 
            </div>    
        </form>
        <div className="marcas">
            <img className='img-marca kia' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655270837/kiarepuestos/Logokia_inv5ts.png" alt="marca no disponible" />
            <img className='img-marca' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655271861/kiarepuestos/1222940_ttcfdx.png" alt="marca no disponible" />
        </div>

    </div>
  )
}

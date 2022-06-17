import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navBar.css'

export default function NavBar() {
  return (
    <div className='container-navBar'>
        <div className="navBar">
            <div className="logo-navBar">
                <img src="logoTrasparente.png" alt="logo no disponible" />
            </div>

            <div className="opciones">
                <span className='texto-navBar'>Repuestos</span>
                <span className='texto-navBar'>Accesorios</span>
            </div>
            <div className="logo-marcas">
                <img className='img-marca kia' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655270837/kiarepuestos/Logokia_inv5ts.png" alt="logo de Kia no disponible" />
                <img className='img-marca' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655271861/kiarepuestos/1222940_ttcfdx.png" alt="logo de hyundai no disponible" />
            </div>

            <div className="login">
                <img className='logo-perfil' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655272461/kiarepuestos/9d04d19d276d1f99b70ea5b8996f782a-pegatina-eliptica-de-simbolo-de-empresario_mvoex2.png" alt="perfil no disponible" />
                <Link to='/login'><span className='texto-navBar login-registro'>Iniciar secion</span></Link>
                <Link to='/registro'><span className='texto-navBar login-registro'>Registrate</span></Link> 
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import RedesSociales from './RedesSociales'
import '../css/footer.css'

export default function Footer() {
  return (
    <div className='container-footer'>
        <div className="bloque1">
            <img className='logo-footer' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655339587/kiarepuestos/logoTrasparente_smlrzs.png" alt="logo no disponible" />

            <h2 className='titulos-footer'>Diseñado</h2>
            <span className='diseñador'><img className='avatar-diseñador' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1649305579/arus/b465abad5d46646422a42343787f493b_rliin5.png" alt="avatar no disponible" />Alexis Rave Florez</span>
            <span className='inf-diseñador'>Desarrollador Front-End</span>
        </div>

        <div className="bloque2">
            <h2 className='titulos-footer'>Contactanos</h2>
            <span className='descripcion-contactanos'><img className='logo-contactanos' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655345800/kiarepuestos/332-3328930_icono-de-correo-blanco-png-email-icon-light_ipzcov.png" alt="No disponible" />kiarepuestos.medellin@gmail.com</span>
            <span className='descripcion-contactanos'><img className='logo-contactanos' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655345860/kiarepuestos/resultado-de-imagen-para-icono-telefono-blanco-phone-icon-gif-white-11562917220vmrn7mfite_aycpe6.png" alt="No disponible" />(604)328 1995</span>
            <span className='descripcion-contactanos'><img className='logo-contactanos' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655345996/kiarepuestos/Phone.png._fip7ev.png" alt="No disponible" />+57-300 324 7156</span>
            <span className='descripcion-contactanos'><img className='logo-contactanos' src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1655340257/kiarepuestos/icone-de-localisation-rouge_urwmtz.png" alt="No disponible" />Calle 59d # 68d 17 - piso 401</span>
        
        </div>

        <div className="bloque3">
            <h2 className='titulos-footer'>Menu</h2>
            <li className='contenido-footer'>Repuestos</li>
            <li className='contenido-footer'>Accesorios</li>
            <li className='contenido-footer'>Llantas</li>
            <li className='contenido-footer'>Bombilleria</li>
            <li className='contenido-footer'>Aceites Kixx</li>
            
        </div>

        <div className="bloque4">
            <RedesSociales/>
        </div>

    </div>
  )
}

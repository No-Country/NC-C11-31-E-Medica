import Link from "next/link"

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <div className="footer-cont">
          <div className="footer-detail-cont">
            <Link className="footer-title" href="/">
              E-medica
            </Link>
            <p className='footer-detail'>E-Medica es una web para encontrar profesionales de la salud y agendar turnos al instante de manera simple y rápida.</p>
          </div>
          <div>
            <h4>Empresas</h4>
            <ul className='footer-list'>
              <li className='footer-li'>Soy empresa</li>
              <li className='footer-li'>Soy profesional</li>
            <li className='footer-li'>Institucional</li>
            </ul>
          </div>
          <div>
            <h4>Acerca de</h4>
            <ul className='footer-list'>
              <li className='footer-li'>Planes</li>
              <li className='footer-li'>Ayuda</li>
              <li className='footer-li'>Contacto</li>
              <li className='footer-li'>Preguntas frecuentes</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  )
}

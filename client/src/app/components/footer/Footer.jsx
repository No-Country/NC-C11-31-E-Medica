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
            <div className='footer-list'>
              <p className='footer-li'>Soy empresa</p>
              <p className='footer-li'>Soy profesional</p>
              <p className='footer-li'>Institucional</p>
            </div>
          </div>
          <div>
            <h4>Acerca de</h4>
            <div className='footer-list'>
              <p className='footer-li'>Planes</p>
              <p className='footer-li'>Ayuda</p>
              <p className='footer-li'>Contacto</p>
              <p className='footer-li'>Preguntas frecuentes</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  )
}

import Link from 'next/link';
import "./styles/not-found.css"
import Image from 'next/image';
export default function NotFound() {
  return (
    <div className='container-404'>
      <section className='content-404'>
        <div>
          <h1>¡Ups! Error 404</h1>
          <p>La siguiente pagina no esta disponible, nuestro
            equipo está trabajando activamente para
            resolverlo </p>
        </div>
        <div>
          <Link className='button-green' href="/">
            Volver al menú principal
          </Link>
          <div className='button-white'>¿Qué es este Error?</div>
        </div>
      </section>
      <div className='image404-container'>
        <Image src="/images/404.png" width={500} height={500} className='image-404'></Image>

      </div>
    </div>
  );
}
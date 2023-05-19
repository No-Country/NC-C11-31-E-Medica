'use client'
import Link from 'next/link'

const Navbar = ({ valueNavbar }) => {
  return (
    <nav className={`nav ${valueNavbar ? 'openNavbar' : 'closeNavbar'}`}>
      <ul className='nav-list'>
        <li>
          <Link href='/medic' className='nav-link'>
            Médico
          </Link>
        </li>
        <li>
          <Link href='/register' className='nav-link'>
            Registro
          </Link>
        </li>
        <li>
          <Link href='/login' className='nav-link'>
            Ingresar
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

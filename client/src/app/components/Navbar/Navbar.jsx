'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = ({ valueNavbar }) => {

  const[localStorageData, setLocaStorageData] = useState()
  const userFirstName = JSON.parse(localStorage.getItem("firstName"))
  const userLastName = JSON.parse(localStorage.getItem("lastName"))
  console.log('firstName:', userFirstName)

  return (
    <nav className={`nav ${valueNavbar ? 'openNavbar' : 'closeNavbar'}`}>
      {!userFirstName ? 
      <ul className='nav-list'>
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
    : 
    <ul className='nav-list'>
        <li>
          <Link href='/register' className='nav-link'>
            {userFirstName}
          </Link>
        </li>
      </ul>
      }
      
    </nav>
  )
}

export default Navbar

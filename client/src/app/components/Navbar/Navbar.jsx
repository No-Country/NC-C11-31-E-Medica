'use client'
import GlobalContext from '@/app/context/global/Global-context'
import Link from 'next/link'
import { useContext } from 'react'
import DropdownMenu from './DropdownMenu'

const Navbar = ({ valueNavbar }) => {
  const {userData, setUserData} = useContext(GlobalContext);

  const logOut = () =>{
    setUserData({});
  }

  return (
    <nav className={`nav ${valueNavbar ? 'openNavbar' : 'closeNavbar'}`}>
      {!userData.firstName ? (
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
    ) : (
    <ul className='nav-list'>
      <li>
        <DropdownMenu logOut={logOut}/>
      </li>
    </ul>
      )}
    </nav>
  )
}

export default Navbar


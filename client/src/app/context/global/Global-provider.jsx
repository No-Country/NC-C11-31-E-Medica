import GlobalContext from './Global-context'
import React, { useEffect, useState } from 'react'

const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    try {
      const rawUserData = JSON.parse(localStorage.getItem("user"))
      console.log(rawUserData)
      setUserData(rawUserData)
    } catch(err) {}
  }, [])

  return (
    <GlobalContext.Provider value={ { userData, setUserData } }>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

import GlobalContext from './Global-context'
import React, { useEffect, useState } from 'react'

const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const rawUserData = JSON.parse(localStorage.getItem("user"))
    if (rawUserData) {
      setUserData(rawUserData)
    }
  }, [])



  return (
    <GlobalContext.Provider value={{
      userData,
      setUserData
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

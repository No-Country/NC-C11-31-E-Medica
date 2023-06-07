import GlobalContext from './Global-context'
import React, { useState } from 'react'

const GlobalProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  return (<>
            <GlobalContext.Provider value={ { userData, setUserData } }>
              {children}
            </GlobalContext.Provider>
          </>)
}

export default GlobalProvider

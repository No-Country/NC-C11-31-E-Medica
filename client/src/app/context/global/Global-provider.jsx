import { GlobalContext } from './GlobalContext'
import { useState } from 'react'

const GlobalProvider = ({ children }) => {
  const [stateFilter, setStateFilter] = useState('')

  return <GlobalContext.Provider value={}>{children}</GlobalContext.Provider>
}

export { GlobalProvider }

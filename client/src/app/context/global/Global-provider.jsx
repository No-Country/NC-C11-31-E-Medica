import { GlobalContext } from './GlobalContext'
import { useState } from 'react'

const GlobalProvider = ({ children }) => {
  const [stateFilter, setStateFilter] = useState('')

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}

export { GlobalProvider }

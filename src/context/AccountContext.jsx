import { createContext, useContext, useState } from "react";

export const AccountContext = createContext({})

export const AccountContextProvider = ({children}) => {
    const [accounts, setAccount] = useState(null)

    async function handleAccounts() {
        setAccount(await window.ethereum.request({method: "eth_requestAccounts",}))
      }

  return (
    <AccountContext.Provider value={{accounts, handleAccounts}}>
        {children}
    </AccountContext.Provider>
  )
}
export const useAccountContext = () => useContext(AccountContext)
// export default Web3ContextProvider
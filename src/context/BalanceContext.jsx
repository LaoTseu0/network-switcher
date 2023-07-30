import { createContext, useContext, useState } from "react";
import { formatBalance } from "../utils";

export const BalanceContext = createContext({})

export const BalanceContextProvider = ({children}) => {
    const [balance, setBalance] = useState(null)

    async function handleBalance(accounts) {
        setBalance(await window.ethereum.request({
                    method: "eth_getBalance",
                    params: [accounts[0].toString(), "latest"],
            }))
        console.log(formatBalance(balance));
      }

  return (
    <BalanceContext.Provider value={{balance, handleBalance}}>
        {children}
    </BalanceContext.Provider>
  )
}
export const useBalanceContext = () => useContext(BalanceContext)
// export default Web3ContextProvider
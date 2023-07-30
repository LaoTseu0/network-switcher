import { createContext, useContext, useState } from "react";

export const ChainIdContext = createContext({})

export const ChainIdContextProvider = ({children}) => {
    const [chainId, setChainId] = useState(null)

    async function handleChainId() {
        setChainId(await window.ethereum.request({method: "eth_chainId",}))
      }

  return (
    <ChainIdContext.Provider value={{chainId, handleChainId}}>
        {children}
    </ChainIdContext.Provider>
  )
}
export const useChainIdContext = () => useContext(ChainIdContext)
// export default Web3ContextProvider
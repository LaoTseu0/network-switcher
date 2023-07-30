import { useEffect } from 'react'
import './App.css'
import {useAccountContext} from './context/AccountContext'
// import { formatChainAsNum } from './utils/index'
import { useChainIdContext } from './context/ChainIdContext'
import { useBalanceContext } from './context/BalanceContext'
import NetworkList from './components/NetworkList'
// import Web3 from 'web3'

function App() {
  const {accounts, handleAccounts} = useAccountContext()
  const {chainId, handleChainId} = useChainIdContext()
  const { balance, handleBalance } = useBalanceContext()
  let injectedProvider;

  useEffect(() => {
    // setProvider(new Web3(window.ethereum))
    if (typeof window.ethereum !== 'undefined') {
      injectedProvider = true
      console.log(window.ethereum)
      if (accounts == null) handleAccounts()
      if (accounts != null){
          console.log(accounts);
          handleChainId()
          handleBalance(accounts)
        }
      // window.ethereum.on('accountsChanged', handleAccount())
      // window.ethereum.on("chainChanged", handleChainId())
     
    }
  }, [accounts])

  return (
    <div className={"flex flex-row h-full w-full gap-8"}>
      <NetworkList type={"Mainnets"}/>
      <NetworkList type={"Testnets"}/>
    </div>
  )
}

export default App

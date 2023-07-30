import {AccountContextProvider } from '../context/AccountContext.jsx'
import { ChainIdContextProvider } from '../context/ChainIdContext.jsx';
import { BalanceContextProvider } from '../context/BalanceContext.jsx';


function GlobalProvider(props) {
  return (
        <AccountContextProvider>
            <ChainIdContextProvider>
                <BalanceContextProvider>
                    {props.children}
                </BalanceContextProvider>
            </ChainIdContextProvider>
        </AccountContextProvider>
    );
  }

export default GlobalProvider

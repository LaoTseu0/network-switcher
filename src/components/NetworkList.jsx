import {mainnets} from '../data/network/mainnetList.json'
import {testnets} from '../data/network/mainnetList.json'
import Switcher from './Switcher'

const NetworkList = ({type}) => {
  // const arr= [1,2,3]

  return (
    <div className={"flex flex-col gap-1"}>
      <h1>{type}</h1>
    {
      type === "Mainnets" ?
        [...Object.keys(mainnets)].map((e, i) => 
          <Switcher 
            network={e} 
            chainId={mainnets[e].chainId} 
            img={mainnets[e].img} 
            key={i}/>
        ) : 
        [...Object.keys(testnets)].map((e, i) => 
          <Switcher 
            network={e} 
            chainId={testnets[e].chainId} 
            img={testnets[e].img} 
            key={i}/>
        )
    }
    </div>
  )
}
export default NetworkList
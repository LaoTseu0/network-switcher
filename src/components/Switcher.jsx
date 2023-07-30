const Switcher = ({network, chainId, img}) => {

    const handleClick = async (_chainId) => {
        await window.ethereum.request({
          "method": "wallet_switchEthereumChain",
          "params": [{"chainId": _chainId}]
        });
      }

  return (
    <div onClick={() => handleClick(chainId)} 
      className={"flex gap-1 border border-sky-400 cursor-pointer hover:bg-amber-700"}>
        <img className={"w-8 h-auto"} src={img} alt="logo" />
        <span className={"flex items-center"}>{network}</span>
    </div>
  )
}
export default Switcher
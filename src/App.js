import SimpleToken from './artifacts/contracts/SimpleToken.sol/SimpleToken.json'
import { ethers } from 'ethers';
import {useState} from 'react';
import Navbar from './Navbar'
import {nftaddress} from './config';
 function App() {

  const [name,setname]=useState();
  const [symbol,setsymbol]=useState();
  const[account,setaccount]=useState();
  const[balance,setbalance]=useState();
 
    async function getAddress()
    {
      const [account]= await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(nftaddress, SimpleToken.abi, signer);
      const balance= await contract.balanceOf(account)
   
      const TokenSynbol=await contract.symbol()
      const TokenName=await contract.name()
    //  console.log(TokenName)
      //console.log(TokenSynbol)
      setname(TokenName)
      setsymbol(TokenSynbol)
      setaccount(account)
      setbalance(balance.toString())
    }
    
    getAddress();
  
  return (
    <>
    
      <div className="App">
      <Navbar account={account} balance={balance}/>
      </div>
    
     </>
  );
}

export default App;

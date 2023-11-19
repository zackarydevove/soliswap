import React, { useState } from 'react'
import Navbar from '../components/general/Navbar';
import ConnectWallet from '../components/general/ConnectWallet';
import { IoFileTrayOutline } from "react-icons/io5";
import CreatePool from '../components/pools/CreatePool';
import SelectToken from '../components/general/SelectToken';
import ManagePool from '../components/pools/ManagePool';

const PoolsPage: React.FC = () => {
	const [isTokenSelectVisible, setIsTokenSelectVisible] = useState(false);
	const [isTokenSelectAnimating, setIsTokenSelectAnimating] = useState(false);
	const [isConnectWalletVisible, setIsConnectWalletVisible] = useState(false);
	const [isAddLiquidityVisible, setIsAddLiquidityVisible] = useState(false);

	const toggleTokenSelect = () => {
		if (!isTokenSelectVisible) {
		  setIsTokenSelectVisible(true);
		  setTimeout(() => {setIsTokenSelectAnimating(true)}, 20);
		} else {
		  setIsTokenSelectAnimating(false);
		  setTimeout(() => {setIsTokenSelectVisible(false)}, 500);
		}
	};

	const toggleConnectWallet = () => {
	  if (isConnectWalletVisible) {
			setIsConnectWalletVisible(false);
	  } else {
			setIsConnectWalletVisible(true);
	  }
	};

  return (
    <div className='h-screen w-screen bg-[#131313]'>
      <Navbar onConnectWalletClick={toggleConnectWallet}/>

	  {
		isAddLiquidityVisible 
		?
			<CreatePool
				onConnectWalletClick={toggleConnectWallet}
				onTokenSelectClick={toggleTokenSelect}
				closeAddLiquidity={() => setIsAddLiquidityVisible(false)}
			/>
		:
			<ManagePool
				toggleConnectWallet={toggleConnectWallet}
				openAddLiquidity={() => setIsAddLiquidityVisible(true)}
			/>
		}

	  {isTokenSelectVisible && (
		<div 
			className={`fixed inset-0 transition-opacity duration-500 ${isTokenSelectAnimating ? "opacity-100" : "opacity-0"}`}
			onClick={toggleTokenSelect}
		>
		<SelectToken onClose={toggleTokenSelect} />
		</div>
	  )}


	  <ConnectWallet onClose={toggleConnectWallet} isVisible={isConnectWalletVisible} />	  
	</div>
  )
}

export default PoolsPage

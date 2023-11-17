import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SwapComponent from '../components/SwapComponent'
import SelectToken from '../components/SelectToken'
import ConnectWalletComponent from '../components/ConnectWalletComponent';

function HomePage() {
	const [isSettingsVisible, setIsSettingsVisible] = useState(false);
	const [isTokenSelectVisible, setIsTokenSelectVisible] = useState(false);
	const [isConnectWalletVisible, setIsConnectWalletVisible] = useState(false);

	const toggleSettingsSelect = () => {
		setIsSettingsVisible(!isSettingsVisible);
	};
  
	const toggleTokenSelect = () => {
	  setIsTokenSelectVisible(!isTokenSelectVisible);
	};

	const toggleConnectWallet = () => {
		setIsConnectWalletVisible(!isConnectWalletVisible);
	};

  return (
	<div className='h-screen w-screen bg-[#131313]'>
		<Navbar onConnectWalletClick={toggleConnectWallet}/>
		<div className='flex justify-center items-center'>
        	<SwapComponent 
				onSettingsClick={toggleSettingsSelect}
				onTokenSelectClick={toggleTokenSelect} 
				onConnectWalletClick={toggleConnectWallet} />
		</div>
      	{isSettingsVisible && <SelectToken onClose={toggleSettingsSelect} />}
      	{isTokenSelectVisible && <SelectToken onClose={toggleTokenSelect} />}
		{isConnectWalletVisible && <ConnectWalletComponent onClose={toggleConnectWallet} />}
	</div>
  )
}

export default HomePage

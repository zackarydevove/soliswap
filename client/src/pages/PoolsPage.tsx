import React, { useState } from 'react'
import Navbar from '../components/general/Navbar';
import ConnectWallet from '../components/general/ConnectWallet';
import { IoFileTrayOutline } from "react-icons/io5";

const PoolsPage: React.FC = () => {
	const [isConnectWalletVisible, setIsConnectWalletVisible] = useState(false);

	const toggleConnectWallet = () => {
	  if (isConnectWalletVisible) {
		// Start slide-out animation
		setIsConnectWalletVisible(false);
	  } else {
		// Render the component and start slide-in animation
		setIsConnectWalletVisible(true);
	  }
	};

  return (
    <div className='h-screen w-screen bg-[#131313]'>
      <Navbar onConnectWalletClick={toggleConnectWallet}/>
	  <div className='flex justify-center items-center mt-16'>
		<div className='w-[854px] flex flex-col justify-center items-center gap-6 text-white'>
			<div className='w-full flex items-end'>
				<p className='flex-1 text-3xl font-bold'>Pools</p>
				<div className='flex'>
					<button className='p-2 rounded-xl bg-[#fc72ff] hover:bg-[#e93cec]'>+ New position</button>
				</div>
			</div>
			<div className='w-full flex flex-col justify-center items-center p-7 py-12 border border-neutral-800 rounded-xl'>
				<IoFileTrayOutline size={'3em'}/>
				<p className='mt-4'>Your active liquidity positions will appear here.</p>
				<button
					className='mt-8 py-2 px-20 rounded-2xl bg-[#fc72ff] hover:bg-[#e93cec] font-bold'
					onClick={toggleConnectWallet}
				>
					Connect a wallet
				</button>

			</div>
		</div>
	  </div>

	  <ConnectWallet onClose={toggleConnectWallet} isVisible={isConnectWalletVisible} />	  
	</div>
  )
}

export default PoolsPage

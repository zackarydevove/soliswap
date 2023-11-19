import React, { useState } from 'react'
import Navbar from '../components/general/Navbar';
import FarmComponent from '../components/farms/FarmComponent';
import ConnectWallet from '../components/general/ConnectWallet';
import { FaR } from 'react-icons/fa6';
import { mockFarms } from '../utils/mockFarms';

const FarmsPage: React.FC = () => {
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
    <div className='min-h-screen w-screen bg-[#131313]'>
      <Navbar onConnectWalletClick={toggleConnectWallet}/>
      <div className='flex flex-col justify-center items-center mt-16 text-white'>
				<div className=''>
					<p className='text-3xl font-bold'>Farms</p>
					<div className='grid grid-cols-2 gap-4 mt-8 '>
						{
							mockFarms.map((farm, index) => (
								<FarmComponent 
									farm={farm}
									onConnectWalletClick={toggleConnectWallet}
								/>
							))
						}
					</div>
				</div>
      </div>
	  <ConnectWallet onClose={toggleConnectWallet} isVisible={isConnectWalletVisible} />
	</div>
  )
}

export default FarmsPage

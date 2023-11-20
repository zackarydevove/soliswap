import React, { useState } from 'react';
import Navbar from '../components/general/Navbar';
import SwapComponent from '../components/swap/SwapComponent';
import SelectToken from '../components/general/SelectToken';
import ConnectWallet from '../components/general/ConnectWallet';
import ConfirmSwap from '../components/swap/ConfirmSwap';

function SwapPage() {
  const [isTokenSelectVisible, setIsTokenSelectVisible] = useState(false);
  const [isTokenSelectAnimating, setIsTokenSelectAnimating] = useState(false);
  const [isConnectWalletVisible, setIsConnectWalletVisible] = useState(false);
  const [isConfirmSwapVisible, setIsConfirmSwapVisible] = useState(false);

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
      <div className='flex justify-center items-center'>
        <SwapComponent onTokenSelectClick={toggleTokenSelect} onConnectWalletClick={toggleConnectWallet} onConfirmSwap={() => setIsConfirmSwapVisible(true)}/>
      </div>

      {
				isTokenSelectVisible && (
					<div 
						className={`fixed inset-0 transition-opacity duration-500 ${isTokenSelectAnimating ? "opacity-100" : "opacity-0"}`}
						onClick={toggleTokenSelect}
					>
						<SelectToken onClose={toggleTokenSelect} />
					</div>
      )}

	  <ConnectWallet onClose={toggleConnectWallet} isVisible={isConnectWalletVisible} />
		{ isConfirmSwapVisible && <ConfirmSwap onClose={() => setIsConfirmSwapVisible(false)}/> }
    </div>
  );
}

export default SwapPage;

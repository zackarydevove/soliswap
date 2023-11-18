import React, { useState } from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import ConnectWalletSettings from './ConnectWalletSettings';
import ConnectWalletComponent from './ConnectWalletComponent';

interface ConnectWalletProps {
	onClose: () => void
	isVisible: boolean
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ onClose, isVisible }) => {
	const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  return (
	<div className={`connect-wallet-modal fixed top-0 right-0 h-full p-2 flex transition-transform duration-500 ${isVisible ? 'connect-wallet-modal--visible' : 'connect-wallet-modal--invisible'}`}>
		<div className='p-4' onClick={onClose}>
			<FaAnglesRight size={"1.3em"} className='text-neutral-500 hover:cursor-pointer hover:text-white'/>
		</div>
		{isSettingsVisible && <ConnectWalletSettings onClose={() => setIsSettingsVisible(false)} />}
		{!isSettingsVisible && <ConnectWalletComponent onClose={onClose} isVisible={isVisible} setSettingsVisible={() => setIsSettingsVisible(true)} />}
	</div>
  )
}

export default ConnectWallet

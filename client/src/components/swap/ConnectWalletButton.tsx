import React from 'react'

interface ConnectWalletButtonProps {
	onConnectWalletClick: () => void
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({ onConnectWalletClick }) => {
	return (
		<div className='mt-1'>
			<button className='w-full py-4 bg-[#311c31] text-[#fc72ff] rounded-xl hover:bg-[#291729]' onClick={onConnectWalletClick}>
					Connect Wallet
			</button>
		</div>
	)
}

export default ConnectWalletButton

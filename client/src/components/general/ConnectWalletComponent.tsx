import React from 'react'
import { IoMdSettings } from "react-icons/io";
import Wallet from './Wallet';

interface ConnectWalletComponentProps {
	onClose: () => void
	isVisible: boolean
	setSettingsVisible: () => void
}

const ConnectWalletComponent: React.FC<ConnectWalletComponentProps> = ({ onClose, isVisible, setSettingsVisible }) => {

  return (
	<div className='w-[390px] h-full flex flex-col gap-4 bg-[#131313] p-4 border border-neutral-800 rounded-2xl'>
		<div className='flex'>
			<p className='flex-1 text-white'>Connect a wallet</p>
			<IoMdSettings size={"1.5em"} className='text-white hover:cursor-pointer hover:text-neutral-500' onClick={setSettingsVisible}/>
		</div>
		<div className='flex flex-col bg-[#131313] rounded-xl'>
			<Wallet />
			<hr className='border-2 border-[#131313]'/>
			<Wallet />
			<hr className='border-2 border-[#131313]'/>
			<Wallet />
			<hr className='border-2 border-[#131313]'/>
			<Wallet />
		</div>
		<p className='text-sm text-neutral-600'>By connecting a wallet, you agree to Soliswap Labs' Terms of Service and consent to its Privacy Policy.</p>
	</div>
  )
}

export default ConnectWalletComponent

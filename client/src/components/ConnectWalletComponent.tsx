import React from 'react'
import { IoMdSettings } from "react-icons/io";
import Wallet from './Wallet';
import { FaAnglesRight } from "react-icons/fa6";

interface ConnectWalletComponentProps {
	onClose: () => void
}

const ConnectWalletComponent: React.FC<ConnectWalletComponentProps> = ({ onClose }) => {
  return (
	<div className='absolute right-0 top-0 h-full p-2 flex'>
		<div className='p-4' onClick={onClose}>
			<FaAnglesRight size={"1.3em"} className='text-neutral-500 hover:cursor-pointer hover:text-white'/>
		</div>
		<div className='w-[390px] h-full flex flex-col gap-4 bg-[#131313] p-4 border border-neutral-800 rounded-2xl'>
			<div className='flex'>
				<p className='flex-1 text-white'>Connect a wallet</p>
				<IoMdSettings size={"1.5em"} className='text-white hover:cursor-pointer hover:text-neutral-500'/>
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
			<p className='text-sm text-neutral-600'>By connecting a wallet, you agree to Solidex Labs' Terms of Service and consent to its Privacy Policy.</p>
		</div>
	</div>
  )
}

export default ConnectWalletComponent

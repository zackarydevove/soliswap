import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleWalletConnection } from '../../store/actions';

interface WalletProps {
	onClose: () => void
}

const Wallet: React.FC<WalletProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleWalletClick = () => {
    dispatch(toggleWalletConnection());
		onClose();
  };

  return (
	<div 
		className='flex gap-2 items-center p-4 bg-[#1b1b1b] hover:cursor-pointer hover:bg-[#2b2a2a] first:rounded-t-2xl last:rounded-b-2xl'
		onClick={handleWalletClick}
	>
		<div className='w-10 h-10 bg-white rounded-xl'/>
		<p className='text-white font-semibold'>Metamask</p>
	</div>
  )
}

export default Wallet

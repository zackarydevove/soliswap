import React, { useState } from 'react'
import { FaArrowDown, FaChevronDown, FaArrowLeft } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import SwapSettings from '../swap/SwapSettings';
import { setSelectingFor, setTokenToPay, setTokenToReceive } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

interface SwapComponentProps {
	onTokenSelectClick: () => void
	onConnectWalletClick: () => void
	closeAddLiquidity: () => void
}

const CreatePool: React.FC<SwapComponentProps> = ({ onTokenSelectClick, onConnectWalletClick, closeAddLiquidity }) => {
	const [isSettingsVisible, setIsSettingsVisible] = useState(false);

	const tokenToPay = useSelector((state: any) => state.tokenToPay);
	const tokenToReceive = useSelector((state: any) => state.tokenToReceive);
  
	const dispatch = useDispatch();

	const openTokenSelectForPay = () => {
		dispatch(setSelectingFor('pay'));
		onTokenSelectClick();
	};
	  
	const openTokenSelectForReceive = () => {
		dispatch(setSelectingFor('receive'));
		onTokenSelectClick();
	};

	const toggleSettingsSelect = () => {
		setIsSettingsVisible(!isSettingsVisible);
	};

	const handleReverseClick = () => {
		const temp = tokenToPay;
		dispatch(setTokenToPay(tokenToReceive));
		dispatch(setTokenToReceive(temp));
	};

	return (
	<div className='flex justify-center items-center mt-16'>
		<div className='flex flex-col p-6 w-[640px]  bg-[#131313] border border-neutral-800 rounded-3xl'>
		<div className='relative flex justify-between items-center'>
			<FaArrowLeft size={'1.3em'} className='text-[#9b9b9b] hover:text-[#888787] hover:cursor-pointer' onClick={closeAddLiquidity}/>
			<h1 className=' text-white'>Add liquidity</h1>
			<IoMdSettings size={'1.3em'} className='text-[#9b9b9b] hover:text-[#888787] hover:cursor-pointer' onClick={toggleSettingsSelect} />
			{isSettingsVisible && <SwapSettings onClose={toggleSettingsSelect} />}
		</div>

		<hr  className='mt-7 mb-4 border-neutral-800'/>

		{/* Swap Input Section */}
		<div className='relative flex flex-col gap-4 flex-1'>
			<p className='text-white'>Deposit amount</p>
			{/* You Pay */}
			<div className='h-1/2'>
			<div className='h-full p-4 flex flex-col rounded-2xl bg-[#1b1b1b] border border-neutral-700'>
				<div className='flex-1 flex items-center'>
					<div className='flex-1'>
						<input type='number' className='w-full bg-[#1b1b1b] text-white text-4xl outline-none no-spinners' placeholder='0' />
					</div>
					{
						tokenToPay ?
							<button
								className='flex items-center bg-[#131313] border border-neutral-800 text-white p-1 gap-2 rounded-full hover:bg-neutral-800 hover:border-neutral-700' 
								onClick={openTokenSelectForPay}
							>
								<img className='h-7 w-7 rounded-full' src={tokenToPay?.logoURI} alt={tokenToPay?.name}/>
								<p className='text-xl'>{tokenToPay?.symbol}</p>
								<FaChevronDown/>
							</button>
						:
							<button 
								className='flex items-center bg-[#fc72ff] border border-neutral-800 text-white px-3 py-1 gap-2 rounded-full hover:bg-neutral-800 hover:border-neutral-700' 
								onClick={openTokenSelectForPay}
							>
								<p className='text-xl'>Select token</p>
								<FaChevronDown/>
							</button>
					}
				</div>
				<p className='text-gray-500 text-sm mt-4'>$12.431</p>
			</div>
			</div>

			{/* You Receive */}
			<div className=' h-1/2'>
			<div className='h-full p-4 flex flex-col rounded-2xl bg-[#1b1b1b] border border-neutral-700'>
				<div className='flex-1 flex items-center'>
					<div className='flex-1'>
						<input type='number' className='w-full bg-[#1b1b1b] text-white text-4xl outline-none no-spinners' placeholder='0' />
					</div>
					{
						tokenToReceive ?
							<button 
								className='flex items-center bg-[#131313] border border-neutral-800 text-white p-1 gap-2 rounded-full hover:bg-neutral-800 hover:border-neutral-700'
								onClick={openTokenSelectForReceive}
							>
								<img className='h-7 w-7 rounded-full' src={tokenToReceive?.logoURI} alt={tokenToReceive?.name}/>
								<p className='text-xl'>{tokenToReceive?.symbol}</p>
								<FaChevronDown/>
							</button>
						:
							<button 
								className='flex items-center bg-[#fc72ff] border border-neutral-800 text-white px-3 py-1 gap-2 rounded-full hover:bg-neutral-800 hover:border-neutral-700'
								onClick={openTokenSelectForReceive}
							>
								<p className='text-xl'>Select token</p>
								<FaChevronDown/>
							</button>
					}
				</div>
				<p className='text-gray-500 text-sm mt-4'>$12.431</p>
			</div>
			</div>

		</div>

		{/* Connect Wallet Button */}
		<div className='mt-4'>
			<button className='w-full py-4 bg-[#311c31] text-[#fc72ff] rounded-xl hover:bg-[#291729]' onClick={onConnectWalletClick}>
			Connect Wallet
			</button>
		</div>
		</div>
	</div>
  )
}

export default CreatePool

import React, { useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import { FaChevronDown, FaArrowDown } from "react-icons/fa";
import SwapSettings from './SwapSettings';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectingFor, setTokenToPay, setTokenToReceive } from '../../store/actions';
import { FaGasPump } from "react-icons/fa";

interface SwapComponentProps {
	onTokenSelectClick: () => void
	onConnectWalletClick: () => void
}

const SwapComponent: React.FC<SwapComponentProps> = ({ onTokenSelectClick, onConnectWalletClick}) => {
	const [isSettingsVisible, setIsSettingsVisible] = useState(false);

	const tokenToPay = useSelector((state: any) => state.tokenToPay);
	const tokenToReceive = useSelector((state: any) => state.tokenToReceive);
	const walletConnected = useSelector((state: any) => state.isWalletConnected);
  
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
    <div className='flex flex-col p-2 mt-16 w-[462px] h-[372px] bg-[#131313] border border-neutral-800 rounded-3xl shadow-[0_0_125px_-5px_rgba(252,114,255,0.15)]'>
      <div className='relative flex justify-between items-center p-3'>
        <h1 className=' text-white'>Swap</h1>
		<IoMdSettings size={'1.3em'} className='text-[#9b9b9b] hover:text-[#888787] hover:cursor-pointer' onClick={toggleSettingsSelect} />
      	{isSettingsVisible && <SwapSettings onClose={toggleSettingsSelect} />}
      </div>

      {/* Swap Input Section */}
      <div className='relative flex flex-col gap-1 flex-1'>
        {/* You Pay */}
        <div className='h-1/2'>
          <div className='h-full p-4 flex flex-col rounded-2xl bg-[#1b1b1b]'>
            <p className='text-xs font-medium text-gray-400'>You pay</p>
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
          </div>
        </div>

        {/* You Receive */}
        <div className=' h-1/2'>
          <div className='h-full p-4 flex flex-col rounded-2xl bg-[#1b1b1b]'>
            <p className='text-xs font-medium text-gray-400'>You receive</p>
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
          </div>
        </div>

				{/* Reverse button */}
				<div
					className='w-10 h-10 flex justify-center items-center rounded-xl absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-[#1b1b1b] border-4 border-[#131313] hover:cursor-pointer'
					onClick={handleReverseClick}
				>
					<FaArrowDown className='text-white'/>
				</div>

    	</div>

			{
				walletConnected ?
				<div className='flex flex-col'>
					<div className='mt-1'>
						<div className='flex justify-between text-white w-full p-3  border border-neutral-800 rounded-xl text-center'>
							<div className='flex gap-1'>
								<p className='text-white text-sm'>1 CRV = 0.000029 ETH</p>
								<p className='text-[#838383] text-sm '>($1,979,60)</p>
							</div>
							<div className='flex items-center gap-2 text-[#838383]'>
								<FaGasPump/>
								<p className='text-sm'>$14.30</p>
								<FaChevronDown/>
							</div>
						</div>
					</div>

					{/* Insufficient Balance */}
					<div className='mt-1'>
						<div className='w-full py-4 bg-[#1b1b1b] text-[#515151] rounded-xl text-center'>
								Insufficient {tokenToPay?.name} balance
						</div>
					</div>
				</div>
				:
					// {/* Connect Wallet Button */}
					<div className='mt-1'>
						<button className='w-full py-4 bg-[#311c31] text-[#fc72ff] rounded-xl hover:bg-[#291729]' onClick={onConnectWalletClick}>
								Connect Wallet
						</button>
					</div>
			}
    </div>
  )
}

export default SwapComponent

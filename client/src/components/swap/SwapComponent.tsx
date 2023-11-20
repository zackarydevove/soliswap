import React, { useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import { FaChevronDown, FaArrowDown, FaChevronUp } from "react-icons/fa";
import SwapSettings from './SwapSettings';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectingFor, setTokenToPay, setTokenToReceive } from '../../store/actions';
import { FaGasPump } from "react-icons/fa";
import ShowSwapDetails from './ShowSwapDetails';
import InsufficientBalanceButton from './InsufficientBalanceButton';
import SwapButton from './SwapButton';
import ReverseButton from './ReverseButton';
import PickToken from './PickToken';
import SwapDetails from './SwapDetails';
import ConnectWalletButton from './ConnectWalletButton';

interface SwapComponentProps {
	onTokenSelectClick: () => void
	onConnectWalletClick: () => void
	onConfirmSwap: () => void
}

const SwapComponent: React.FC<SwapComponentProps> = ({ onTokenSelectClick, onConnectWalletClick, onConfirmSwap}) => {
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
    <div className='flex flex-col p-2 mt-16 w-[462px] bg-[#131313] border border-neutral-800 rounded-3xl shadow-[0_0_125px_-5px_rgba(252,114,255,0.15)]'>
      <div className='relative flex justify-between items-center p-3'>
        <h1 className=' text-white'>Swap</h1>
				<IoMdSettings size={'1.3em'} className='text-[#9b9b9b] hover:text-[#888787] hover:cursor-pointer' onClick={toggleSettingsSelect} />
      	{isSettingsVisible && <SwapSettings onClose={toggleSettingsSelect} />}
      </div>

      {/* Swap Input Section */}
      <div className='relative flex flex-col gap-1 flex-1'>
        {/* You Pay */}
				<PickToken token={tokenToPay} openTokenSelect={openTokenSelectForPay}/>
        {/* You Receive */}
				<PickToken token={tokenToReceive} openTokenSelect={openTokenSelectForReceive}/>
				<ReverseButton handleReverseClick={handleReverseClick} />
    	</div>

			{/* Swap details and button OR connect wallet button */}
			{ walletConnected ? <SwapDetails tokenToPay={tokenToPay} onConfirmSwap={onConfirmSwap}/> : <ConnectWalletButton onConnectWalletClick={onConnectWalletClick}/> }

    </div>
  )
}

export default SwapComponent

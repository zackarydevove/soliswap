import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaGasPump } from 'react-icons/fa'
import ShowSwapDetails from './ShowSwapDetails'
import InsufficientBalanceButton from './InsufficientBalanceButton'
import SwapButton from './SwapButton'

interface SwapDetailsProps {
	tokenToPay: any
	onConfirmSwap: () => void
}

const SwapDetails: React.FC<SwapDetailsProps> = ({ tokenToPay, onConfirmSwap }) => {
	const [insufficientBalance, setInsufficientBalance] = useState(false);
	const [showSwapDetails, setShowSwapDetails] = useState(false);

	return (
		<div className='flex flex-col'>
			<div className='mt-1'>
				<div className='flex flex-col gap-2 text-[0.9rem] w-full p-4  border border-neutral-800 rounded-xl text-center'>
					<div className='flex justify-between text-white '>
						<div className='flex gap-1'>
							<p className='text-white '>1 CRV = 0.000029 ETH</p>
							<p className='text-[#838383]  '>($1,979,60)</p>
						</div>
						<div className='flex items-center gap-2 text-[#838383]'>
							<FaGasPump/>
							<p className=''>$14.30</p>
							<div className='hover:cursor-pointer' onClick={() => setShowSwapDetails(!showSwapDetails)}>
								{ showSwapDetails ? <FaChevronUp/> : <FaChevronDown/> }
							</div>
						</div>
					</div>
					{ showSwapDetails && <ShowSwapDetails/> }							
				</div>
			</div>
			{ insufficientBalance ? <InsufficientBalanceButton symbol={tokenToPay.symbol}/> : <SwapButton onConfirmSwap={onConfirmSwap}/> }
		</div>
	)
}

export default SwapDetails

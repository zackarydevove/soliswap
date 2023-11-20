import React from 'react'

interface SwapButtonProps {
	onConfirmSwap: () => void
}

const SwapButton: React.FC<SwapButtonProps> = ({ onConfirmSwap }) => {
	return (
		<div className='mt-1'>
			<div
				className='w-full py-4 bg-[#fc72ff] hover:bg-[#e93cec] text-white font-bold text-lg rounded-xl text-center hover:cursor-pointer'
				onClick={onConfirmSwap}>
					Swap
			</div>
		</div>
	)
}

export default SwapButton

import React from 'react'

interface InsufficientBalanceButtonProps {
	symbol: string
}

const InsufficientBalanceButton: React.FC<InsufficientBalanceButtonProps> = ({ symbol}) => {
	return (
		<div className='mt-1'>
			<div className='w-full py-4 bg-[#1b1b1b] text-[#515151] rounded-xl text-center'>
					Insufficient {symbol} balance
			</div>
		</div>
	)
}

export default InsufficientBalanceButton

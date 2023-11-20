import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

interface ReverseButtonProps {
	handleReverseClick: () => void
}

const ReverseButton: React.FC<ReverseButtonProps> = ({ handleReverseClick }) => {
	return (
		<div
			className='w-10 h-10 flex justify-center items-center rounded-xl absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-[#1b1b1b] border-4 border-[#131313] hover:cursor-pointer'
			onClick={handleReverseClick}
		>
			<FaArrowDown className='text-white'/>
		</div>
	)
}

export default ReverseButton

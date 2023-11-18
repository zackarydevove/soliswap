import React from 'react'
import { FaCaretDown } from "react-icons/fa";

const FarmComponent: React.FC = () => {
  return (
	<div className='p-6 bg-[#131313] border border-neutral-800 rounded-xl hover:border-[#fc72ff] hover:border-opacity-30 hover:cursor-pointer'>
	  <div className='flex'>
		<div className='flex-1 flex items-center gap-2'>
			<div className='flex gap-1'>
				<div className='h-8 w-8 bg-black rounded-lg'/>
				<div className='h-8 w-8 bg-black rounded-lg'/>
			</div>
			<p className='text-xl font-bold'>BTC/ETH</p>
		</div>
		<FaCaretDown />
	  </div>
	  <div className='flex justify-between gap-14 mt-4'>
		<div className='flex flex-col'>
			<p className='text-xs font-bold'>TOTAL VALUE STAKED</p>
			<p className='text-sm'>$13,614,925</p>
		</div>
		<div className='flex flex-col'>
			<p className='text-xs font-bold'>DAILY REWARD</p>
			<p className='text-sm'>24,156.43 SLD / day</p>
		</div>
		<div className='flex flex-col'>
			<p className='text-xs font-bold'>APR</p>
			<p className='text-sm'>52%</p>
		</div>
	  </div>
	</div>
  )
}

export default FarmComponent

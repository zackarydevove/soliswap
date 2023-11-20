import React from 'react'

const ShowSwapDetails: React.FC = () => {
	return (
		<div>
			<hr className='border-neutral-800 my-2'/>
			<div className='flex flex-col gap-3  text-[#838383]'>
				<div className='flex justify-between'>
					<p>Price impact</p>
					<p className='text-white'>~0.329%</p>
				</div>
				<div className='flex justify-between'>
					<p>Max. slippage</p>
					<p className='text-white'>0.575%</p>
				</div>
				<div className='flex justify-between'>
					<p>Fee</p>
					<p className='text-white'>$0</p>
				</div>
				<div className='flex justify-between'>
					<p>Network cost</p>
					<p className='text-white'>$14.91</p>
				</div>
			</div>
		</div>
	)
}

export default ShowSwapDetails

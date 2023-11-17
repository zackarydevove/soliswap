import React from 'react'

const TokenComponent = () => {
  return (
	<div className='flex items-center gap-4 px-4 py-2 bg-[#131313] hover:bg-gray-500 hover:bg-opacity-50 hover:cursor-pointer'>
	  <div className='h-12 w-12 bg-black rounded-full'/>
	  <div className='flex-1 flex flex-col'>
		<p className='text-white'>Ether</p>
		<p className='text-sm text-gray-500'>ETH</p>
	  </div>
	</div>
  )
}

export default TokenComponent

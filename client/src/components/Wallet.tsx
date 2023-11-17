import React from 'react'

const Wallet: React.FC = () => {
  return (
	<div className='flex gap-2 items-center p-4 bg-[#1b1b1b] hover:cursor-pointer hover:bg-[#2b2a2a] first:rounded-t-2xl last:rounded-b-2xl'>
		<div className='w-10 h-10 bg-white rounded-xl'/>
		<p className='text-white font-semibold'>Metamask</p>
	</div>
  )
}

export default Wallet

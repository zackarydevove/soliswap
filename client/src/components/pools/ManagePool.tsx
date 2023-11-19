import React from 'react'
import { IoFileTrayOutline } from 'react-icons/io5'

interface ManagePoolProps {
	toggleConnectWallet: () => void
	openAddLiquidity: () => void
}

const ManagePool: React.FC<ManagePoolProps> = ({ toggleConnectWallet, openAddLiquidity }) => {
  return (

	<div className='flex justify-center items-center mt-16'>
	<div className='w-[854px] flex flex-col justify-center items-center gap-6 text-white'>
		<div className='w-full flex items-end'>
			<p className='flex-1 text-3xl font-bold'>Pools</p>
			<div className='flex'>
				<button className='p-2 rounded-xl bg-[#fc72ff] hover:bg-[#e93cec]' onClick={openAddLiquidity}>+ New position</button>
			</div>
		</div>
		<div className='w-full flex flex-col justify-center items-center p-7 py-12 border border-neutral-800 rounded-xl'>
			<IoFileTrayOutline size={'3em'}/>
			<p className='mt-4'>Your active liquidity positions will appear here.</p>
			<button
				className='mt-8 py-2 px-20 rounded-2xl bg-[#fc72ff] hover:bg-[#e93cec] font-bold'
				onClick={toggleConnectWallet}
			>
				Connect a wallet
			</button>

		</div>
	</div>
  </div>
  )
}

export default ManagePool

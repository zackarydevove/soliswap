import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { LuChevronsUpDown } from "react-icons/lu";
import { useSelector } from 'react-redux'

interface ConfirmSwapProps {
	onClose: () => void
}

const ConfirmSwap: React.FC<ConfirmSwapProps> = ({ onClose }) => {
	const [showMore, setShowMore] = useState(false);

	const tokenToPay = useSelector((state: any) => state.tokenToPay);
	const tokenToReceive = useSelector((state: any) => state.tokenToReceive);

	return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex justify-center items-center' onClick={onClose}>
      <div className='bg-[#131313] w-[418px] border border-neutral-800 rounded-3xl flex flex-col overflow-hidden p-4' onClick={(e) => e.stopPropagation()}>

        {/* Header */}
          <div className='relative flex justify-center items-center'>
            <p className='text-white font-semibold'>Review swap</p>
            <IoMdClose size={"1.5em"} className='absolute top-0 right-0 text-white hover:text-[#888787] hover:cursor-pointer' onClick={onClose} />
          </div>

					<div className='mt-4 flex flex-col gap-8'>
						{/* You pay */}

						<div className='h-1/2'>
							<div className='h-full flex flex-col gap-2'>
								<p className='text-xs font-medium text-gray-400'>You pay</p>
								<div className='flex-1 flex items-center'>
									<div className='w-full flex justify-between items-center'>
										<p className='text-white text-4xl'>0.001 {tokenToPay?.symbol}</p>
										<img className='h-7 w-7 rounded-full' src={tokenToPay?.logoURI} alt={tokenToPay?.name}/>
									</div>
								</div>
								<p className='text-[#838383] text-xs'>$1,992.85</p>
							</div>
						</div>

						{/* You receive */}
						<div className='h-1/2'>
							<div className='h-full flex flex-col gap-2'>
								<p className='text-xs font-medium text-gray-400'>You receive</p>
								<div className='flex-1 flex items-center'>
									<div className='w-full flex justify-between items-center'>
										<p className='text-white text-4xl'>0.001 {tokenToReceive?.symbol}</p>
										<img className='h-7 w-7 rounded-full' src={tokenToReceive?.logoURI} alt={tokenToReceive?.name}/>
									</div>
								</div>
								<p className='text-[#838383] text-xs'>$1,992.85</p>
							</div>
						</div>
					</div>

				<div className='relative my-6 hover:cursor-pointer' onClick={() => setShowMore(!showMore)}>
        	<hr className='border-neutral-800'/>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-[#838383] px-4 bg-[#131313]'>
						<p className='text-sm' >Show {showMore ? 'less' : 'more'}</p>
						<LuChevronsUpDown />
					</div>
				</div>

				{/* Details */}
				{
					showMore &&
					<div>
						<div className='flex flex-col gap-3  text-[#838383]'>
							<div className='flex justify-between text-sm'>
								<p>Rate</p>
								<p className='text-white'>1 {tokenToReceive?.symbol} = 0.0094 {tokenToPay?.symbol}</p>
							</div>
							<div className='flex justify-between text-sm'>
								<p>Fee</p>
								<p className='text-white'>0 {tokenToReceive?.symbol}</p>
							</div>
							<div className='flex justify-between text-sm'>
								<p>Network cost</p>
								<p className='text-white'>$14.91</p>
							</div>
						</div>
					</div>
				}


				{/* Swap button */}
				<div className='mt-7'>
					<div className='w-full py-4 bg-[#fc72ff] hover:bg-[#e93cec] text-white font-bold text-lg rounded-xl text-center hover:cursor-pointer'>
							Swap
					</div>
				</div>

	  </div>
	</div>
	)
}

export default ConfirmSwap

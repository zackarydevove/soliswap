import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

interface PickTokenProps {
	token: any,
	openTokenSelect: () => void

}

const PickToken: React.FC<PickTokenProps> = ({ token, openTokenSelect }) => {
	return (
		<div className='h-1/2'>
			<div className='h-full p-4 flex flex-col gap-2 rounded-2xl bg-[#1b1b1b]'>
				<p className='text-xs font-medium text-gray-400'>You pay</p>
				<div className='flex-1 flex items-center'>
					<div className='flex-1'>
						<input type='number' className='w-full bg-[#1b1b1b] text-white text-4xl outline-none no-spinners' placeholder='0' />
					</div>
					{
						token ?
							<button
								className='flex items-center bg-[#131313] border border-neutral-800 text-white p-1 gap-2 rounded-full hover:bg-neutral-800 hover:border-neutral-700' 
								onClick={openTokenSelect}
							>
								<img className='h-7 w-7 rounded-full' src={token?.logoURI} alt={token?.name}/>
								<p className='text-xl'>{token?.symbol}</p>
								<FaChevronDown/>
							</button>
						:
							<button 
								className='flex items-center bg-[#fc72ff] text-white px-3 py-1 gap-2 rounded-full hover:bg-[#dc59df]' 
								onClick={openTokenSelect}
							>
								<p className='text-xl'>Select token</p>
								<FaChevronDown/>
							</button>
					}
				</div>
				<div className='flex justify-between text-[#838383] text-xs'>
						<p>$1,992.85</p>
						<p>Balance: 0</p>
				</div>
			</div>
		</div>
	)
}

export default PickToken

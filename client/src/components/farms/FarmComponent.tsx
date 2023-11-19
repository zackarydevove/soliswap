import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import { InterfaceMockFarms } from '../../utils/mockFarms';

interface FarmComponentProps {
	onConnectWalletClick: () => void
	farm: InterfaceMockFarms
}

const FarmComponent: React.FC<FarmComponentProps> = ({ onConnectWalletClick, farm }) => {
	const [isOpen, setIsOpen] = useState(false);
  return (
		<div className='p-6 bg-[#131313] border border-neutral-800 rounded-xl hover:border-[#fc72ff] hover:border-opacity-30'>
			<div className='hover:cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
				<div className='flex'>
					<div className='flex-1 flex items-center gap-2'>
						<div className='flex gap-1'>
							<img className="h-8 w-8 rounded-full" src={farm.token1.logoURI} alt={farm.token1.name}/>
							<img className="h-8 w-8 rounded-full" src={farm.token2.logoURI} alt={farm.token2.name}/>
						</div>
						<p className='text-xl font-bold'>{farm.token1.name}/{farm.token2.name}</p>
					</div>
					<FaCaretDown />
				</div>
				<div className='flex justify-between gap-14 mt-4'>
					<div className='flex flex-col'>
						<p className='text-xs font-bold'>TOTAL VALUE STAKED</p>
						<p className='text-sm'>${farm.totalValueStaked}</p>
					</div>
					<div className='flex flex-col'>
						<p className='text-xs font-bold'>DAILY REWARD</p>
						<p className='text-sm'>{farm.dailyReward} SLD / day</p>
					</div>
					<div className='flex flex-col'>
						<p className='text-xs font-bold'>APR</p>
						<p className='text-sm'>{farm.apr}%</p>
					</div>
				</div>
			</div>
				{
					isOpen && (
						<div>
							<hr className='my-4 border-neutral-800'/>
							<div>
								<div className='flex flex-col'>
									<p className='text-xs font-bold'>AVAILABLE IN WALLET</p>
									<p className='text-sm'>{farm.LPAvailableInWallet} BTC/ETH LP</p>
								</div>
								<div className='mt-4 flex justify-between'>
									<div className='flex flex-col'>
										<p className='text-xs font-bold'>TOTAL STAKED</p>
										<p className='text-sm'>{farm.totalStaked} BTC/ETH LP</p>
									</div>
									<div className='flex flex-col'>
										<p className='text-xs font-bold'>YOUR REWARD</p>
										<p className='text-sm'>{farm.yourReward} SLD</p>
									</div>
								</div>
							</div>

							{/* Connet wallet */}
							<div className='mt-4'>
								<button className='w-full py-4 bg-[#311c31] text-[#fc72ff] rounded-xl hover:bg-[#291729]' onClick={onConnectWalletClick}>
										Connect Wallet
								</button>
							</div>
						</div>
					)
				}

		</div>
  )
}

export default FarmComponent

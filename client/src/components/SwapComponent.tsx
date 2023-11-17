import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { FaChevronDown, FaArrowDown } from "react-icons/fa";

interface SwapComponentProps {
	onSettingsClick: () => void
	onTokenSelectClick: () => void
	onConnectWalletClick: () => void
}

const SwapComponent: React.FC<SwapComponentProps> = ({ onSettingsClick, onTokenSelectClick, onConnectWalletClick}) => {
	return (
    <div className='flex flex-col p-2 mt-16 w-[462px] h-[372px] bg-[#131313] border border-neutral-800 rounded-3xl shadow-[0_0_125px_-5px_rgba(252,114,255,0.15)]'>
      <div className='flex justify-between items-center p-3'>
        <h1 className=' text-white'>Swap</h1>
		<IoMdSettings size={'1.3em'} className='text-[#9b9b9b] hover:text-[#888787] hover:cursor-pointer' onClick={onSettingsClick} />
      </div>

      {/* Swap Input Section */}
      <div className='relative flex flex-col gap-1 flex-1'>
        {/* You Pay */}
        <div className='h-1/2'>
          <div className='h-full p-4 flex flex-col rounded-2xl bg-[#1b1b1b]'>
            <p className='text-xs font-medium text-gray-400'>You pay</p>
            <div className='flex-1 flex items-center'>
              <div className='flex-1'>
                <input type='number' className='w-full bg-[#1b1b1b] text-white text-4xl outline-none no-spinners' placeholder='0' />
              </div>
              <button className='flex items-center bg-[#131313] border border-neutral-800 text-white p-1 gap-2 rounded-full' onClick={onTokenSelectClick}>
				<div className='h-8 w-8 bg-black rounded-full'/>
				<p className='text-xl'>ETH</p>
				<FaChevronDown/>
			  </button>
            </div>
          </div>
        </div>

        {/* You Receive */}
        <div className=' h-1/2'>
          <div className='h-full p-4 flex flex-col rounded-2xl bg-[#1b1b1b]'>
            <p className='text-xs font-medium text-gray-400'>You receive</p>
            <div className='flex-1 flex items-center'>
              <div className='flex-1'>
                <input type='number' className='w-full bg-[#1b1b1b] text-white text-4xl outline-none no-spinners' placeholder='0' />
              </div>
              <button className='flex items-center bg-[#131313] border border-neutral-800 text-white p-1 gap-2 rounded-full' onClick={onTokenSelectClick}>
				<div className='h-8 w-8 bg-black rounded-full'/>
				<p className='text-xl'>ARB</p>
				<FaChevronDown/>
			  </button>
            </div>
          </div>
        </div>

		{/* Reverse button */}
		<div className='w-10 h-10 flex justify-center items-center rounded-xl absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-[#1b1b1b] border-4 border-[#131313]'>
			<FaArrowDown className='text-white'/>
		</div>

      </div>

      {/* Connect Wallet Button */}
      <div className='mt-1'>
    	<button className='w-full py-4 bg-[#311c31] text-[#fc72ff] rounded-xl hover:bg-[#291729]' onClick={onConnectWalletClick}>
          Connect Wallet
        </button>
      </div>
    </div>
  )
}

export default SwapComponent

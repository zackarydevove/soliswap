import React, { useEffect, useState } from 'react'
import { BsQuestionCircle } from "react-icons/bs";

interface SwapSettingsProps {
	onClose: () => void
}

const SwapSettings: React.FC<SwapSettingsProps> = ({ onClose }) => {
	const [slippage, setSlippage] = useState('0.5');
	const [isAuto, setIsAuto] = useState(true);
  
	const handleSlippageChange = (event: any) => {
	  setSlippage(event.target.value);
	  setIsAuto(event.target.value === '');
	};
  
	useEffect(() => {
	  if (slippage === '') {
		setIsAuto(true);
	  }
	}, [slippage]);

  return (
    <div className='absolute top-12 right-0 z-20 min-w-80 bg-[#131313] rounded-2xl border border-neutral-800 p-4'>
      <p className='text-white'>Transaction Settings</p>
      
      <div className='mt-5 flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <p className='text-xs text-white'>Slippage tolerance</p>
          <BsQuestionCircle className='text-white'/>
        </div>

        <div className='flex gap-2 items-center'>
		  <div className='flex-1 flex p-2 bg-[#131313] text-white border border-neutral-800 rounded-lg focus-within:border-[#fc72ff] focus-within:border-opacity-30'>
			<input
				className='flex-1 w-28 bg-[#131313] outline-none no-spinners'
				placeholder='0.5'
				type='number'
				value={slippage}
				onChange={handleSlippageChange}
			/>
			<span className='flex items-center text-white'>%</span>
		  </div>

		  <div className='p-1 flex items-center border bg-[#131313] border-neutral-800 rounded-2xl'>
			<div
				className={`text-white p-2 rounded-xl hover:cursor-pointer ${isAuto ? 'bg-neutral-800' : ''}`}
				onClick={() => setIsAuto(true)}
			>
				Auto
			</div>
			<div
				className={`text-white p-2 rounded-xl hover:cursor-pointer ${!isAuto ? 'bg-neutral-800' : ''}`}
				onClick={() => setIsAuto(false)}
			>
				Custom
			</div>
          </div>
        </div>
      </div>

      <div className='mt-4 flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <p className='text-xs text-white'>Transaction deadline</p>
          <BsQuestionCircle className='text-white'/>
        </div>

        <div className='flex gap-2 items-center'>
          <input className='w-16 p-2 bg-[#131313] text-white border border-neutral-800 rounded-lg no-spinners focus:border-[#fc72ff] focus:border-opacity-30 outline-none' placeholder='30' type='number'/>
          <p className='text-white'>minutes</p>
        </div>
      </div>
    </div>
  )
}

export default SwapSettings

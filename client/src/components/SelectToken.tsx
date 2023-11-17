import React from 'react'
import TokenComponent from './TokenComponent'
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SelectToken: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex justify-center items-center' onClick={onClose}>
      <div className='bg-[#131313] w-[418px] h-[675px] border border-neutral-800 rounded-3xl flex flex-col overflow-hidden' onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className='p-5'>
          <div className='flex justify-between items-center'>
            <p className='text-white font-semibold'>Select a token</p>
            <IoMdClose size={"1.5em"} className='text-white hover:text-[#888787] hover:cursor-pointer' onClick={onClose} />
          </div>

          {/* Search bar */}
          <div className='mt-4'>
            <div className='flex items-center gap-2 bg-[#1b1b1b] border border-neutral-800 p-2 px-3 rounded-2xl'>
              <FaSearch size={"1.3em"} className='text-neutral-600' />
              <input className='flex-1 text-white bg-[#1b1b1b] outline-none' placeholder='Search name or paste address'/>
            </div>
          </div>
        </div>

        <hr className='border-neutral-800'/>

		{/* Token list */}
        <div className='overflow-auto hide-scrollbar flex-1'>
				<TokenComponent />
				<TokenComponent />
				<TokenComponent />
				<TokenComponent />
				<TokenComponent />
				<TokenComponent />
				<TokenComponent />
				<TokenComponent />
				<TokenComponent />
				<TokenComponent />
				<TokenComponent />
		</div>

	  </div>
	</div>
  )
}

export default SelectToken

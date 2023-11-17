import React from 'react'
import { GiUnicorn } from "react-icons/gi";

interface NavbarProps {
	onConnectWalletClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onConnectWalletClick }) => {
  return (
    <div className='flex justify-between items-center p-4 bg-[#131313] text-white'>
      {/* Logo and Links */}
      <div className='flex items-center gap-10'>
	  	<GiUnicorn size={"2.5em"} className='text-[#fc72ff]'/>
        <nav className='flex gap-7'>
          <a href="#swap" className='hover:bg-gray-500 p-2 px-3 rounded-2xl hover:bg-opacity-20 transition duration-150'>Swap</a>
          <a href="#pools" className='hover:bg-gray-500 p-2 px-3 rounded-2xl hover:bg-opacity-20 transition duration-150 text-gray-500'>Pools</a>
          <a href="#farms" className='hover:bg-gray-500 p-2 px-3 rounded-2xl hover:bg-opacity-20 transition duration-150 text-gray-500'>Farms</a>
          <a href="#docs" className='hover:bg-gray-500 p-2 px-3 rounded-2xl hover:bg-opacity-20 transition duration-150 text-gray-500'>Documentation</a>
        </nav>
      </div>

      {/* Connect Wallet Button */}
      <div>
		<button className='px-3 py-2 bg-[#311c31] text-[#fc72ff] rounded-full hover:bg-[#291729] font-semibold' onClick={onConnectWalletClick}>
			Connect
		</button>
      </div>
    </div>
  )
}

export default Navbar

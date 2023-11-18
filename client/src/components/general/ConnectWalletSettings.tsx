import React, { useState } from 'react'

import { FaArrowLeft } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

interface ConnectWalletSettingsProps {
	onClose: () => void
}

const ConnectWalletSettings: React.FC<ConnectWalletSettingsProps> = ({ onClose }) => {
	const [isDark, setIsDark] = useState(true);

  return (
	<div className='w-[390px] h-full flex flex-col gap-4 bg-[#131313] p-4 border border-neutral-800 rounded-2xl'>
		<div className='flex justify-center items-center'>
			<FaArrowLeft size={"1.2em"} className='text-white hover:cursor-pointer hover:text-neutral-500' onClick={onClose}/>
			<p className='flex-1 text-white text-center'>Settings</p>
		</div>
		<p className='text-neutral-500 text-sm mt-4'>Preferences</p>
		<div className='flex justify-between items-center'>
			<p className='text-white text-sm'>Theme</p>
			<div className='p-1 flex gap-1 items-center border bg-[#131313] border-neutral-800 rounded-2xl'>
				<div
					className={`py-2 px-4 rounded-xl hover:cursor-pointer hover:bg-neutral-800 hover:text-white transition-colors duration-300 ease-in-out ${isDark ? 'bg-[#fc72ff] bg-opacity-20 text-[#fc72ff]' : 'text-white'} `}
					onClick={() => setIsDark(true)}
				>
					<FaSun/>
				</div>
				<div
					className={`py-2 px-4 rounded-xl hover:cursor-pointer hover:bg-neutral-800 hover:text-white transition-colors duration-300 ease-in-out ${!isDark ? 'bg-[#fc72ff] bg-opacity-20 text-[#fc72ff]' : 'text-white'} `}
					onClick={() => setIsDark(false)}
				>
					<FaMoon/>
				</div>
			</div>
		</div>
		<div className='flex justify-between text-white text-sm py-2 hover:text-neutral-500 hover:cursor-pointer transition-colors duration-300 ease-in-out'>
			<p>Language</p>
			<div className='flex items-center gap-2'>
				<p>English</p>
				<FaChevronRight/>
			</div>
		</div>
		<div className='flex justify-between text-white text-sm py-2 hover:text-neutral-500 hover:cursor-pointer transition-colors duration-300 ease-in-out'>
			<p>Currency</p>
			<div className='flex items-center gap-2'>
				<p>USD</p>
				<FaChevronRight/>
			</div>
		</div>
	</div>
  )
}

export default ConnectWalletSettings

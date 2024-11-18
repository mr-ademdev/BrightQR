import React, { useState } from 'react'
import { IoSunnyOutline } from 'react-icons/io5';
import { MdOutlineDarkMode } from 'react-icons/md';

const ToggleMode = () => {

    const [dark, setDark] = useState(false)
    const toggleTheme = () => {
      setDark(!dark)
      document.body.classList.toggle('dark')
    }

  return (
        <button onClick={toggleTheme} 
                className="fixed right-8 top-8 sm:top-0 sm:right-0 lg:top-4 lg:right-4 text-4xl inline-flex items-center p-2 w-16 h-16 justify-center text-cyan-900 rounded-full hover:bg-gray-400 dark:text-cyan-200 dark:hover:bg-cyan-800">
                {dark ? <IoSunnyOutline/> : <MdOutlineDarkMode />}</button>
    )
}

export default ToggleMode
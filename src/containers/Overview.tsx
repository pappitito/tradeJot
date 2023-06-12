import React from 'react'
import { useSelector } from 'react-redux'
import {  isDarkMode } from '@/redux/themeSlice'
import { lightMode, darkMode } from '@/shared/themeColors'



const Overview = () => {
  const themeDarkMode = useSelector(isDarkMode)
  const {textColor} = themeDarkMode? darkMode: lightMode

  return (
    <div className={`w-[100%]  flex flex-row  ${textColor}  items-center justify-center  `}>Overview</div>
  )
}

export default Overview
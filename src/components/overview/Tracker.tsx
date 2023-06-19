import { isDarkMode } from '@/redux/themeSlice'
import React, { use } from 'react'
import { useSelector } from 'react-redux'
interface width{
    percentage: number
}
const Tracker = ({percentage}: width) => {
    const themeMode = useSelector(isDarkMode)
  return (
    <div className='flex flex-col gap-3 w-[100%]'>
       <div className='relative flex w-[100%]'>
       {percentage && <div className={`flex   w-[${percentage.toString()}%] w-[70%] h-[0.6rem] bg-[#4DCD4A] rounded-[0.3rem] absolute  top-0 left-0`}></div>}
       <div className={`w-[100%] flex  h-[0.5rem] ${themeMode? 'bg-[#7D7D7D]': 'bg-[#EFEFEF]'} m-[0.05rem] mt-[0.05rem] mb-[0.05rem] rounded-[0.25rem]`}></div>
       </div>
       <div>{percentage}% progress, keep going</div>

    </div>
  )
}

export default Tracker
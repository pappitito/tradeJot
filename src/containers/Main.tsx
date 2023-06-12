import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { Mobile, isDarkMode } from '@/redux/themeSlice'
import Header from './Header'
import { lightMode, darkMode } from '@/shared/themeColors'
import Body from './Body'
import MobileSidebar from './MobileSidebar'



const Main = () => {
    const themeDarkMode = useSelector(isDarkMode)
    const isMobile = useSelector(Mobile)
    const {bgColor} =  themeDarkMode? darkMode : lightMode
    
    
    

     useEffect(()=>{
        console.log(bgColor);
        
    },[]) 

  return (
    <div className={`${bgColor}   `}>
        <div className='flex flex-row w-[100%]'>
          {isMobile && <MobileSidebar/>}
          <Sidebar />
          <div className='w-[100%]'>
            <Header/>
            <Body />
          </div>
        </div>
    </div>
  )
}

export default Main
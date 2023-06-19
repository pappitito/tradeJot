import { collapseSidebar, isDarkMode, myTab, setCurrentTab, toggleDarkMode, toggleMobileSidebar } from '@/redux/themeSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lightMode, darkMode } from '@/shared/themeColors'
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Avatar } from '@mui/material';
import Button from '@/components/Button';


const Header = () => {
    const currentTab = useSelector(myTab)
    const dispatch = useDispatch()
    const themeDarkMode = useSelector(isDarkMode)
    const {bgColor, bgCard, textColor, hover} = themeDarkMode? darkMode: lightMode
    
    

    function camelCase(text: string){
      return text.replace(text[0], text[0].toUpperCase())
    }
   
   

  return (
    <div className={`flex  flex-row   sticky top-0 items-center ${textColor} ${bgColor} justify-between w-[100%] pl-2 pr-2  p-3 xs:pl-4 xs:pr-4`}>
        <div className='flex flex-row items-center'>
          <div onClick={()=>{
            dispatch(collapseSidebar())
            
          }} className='hidden md:flex p-1 cursor-pointer'><MenuIcon /></div>
          <div onClick={()=>{
            
            dispatch(toggleMobileSidebar())
          }} className='flex md:hidden p-1 cursor-pointer'><MenuIcon /></div>
          <div className={`ml-[1rem] text-[1.3rem] md:text-[1.6rem] `}>{camelCase(currentTab)}</div> 
          </div> 
        
        <div className='flex flex-row items-center gap-2 md:gap-5'>
          <button onClick={()=>{
            dispatch(toggleDarkMode())
            console.log(darkMode);
            }} className={`${textColor} ${hover} p-[0.35rem] hidden xs:flex items-center cursor-pointer justify-center  rounded-[50%] ${bgCard}`}>{themeDarkMode? 
          <LightModeIcon className='text-center ' /> : 
          <DarkModeIcon className='text-center'/> }</button>
          <div className='w-[6rem]'><Button onClick={()=>dispatch(setCurrentTab('new entry'))} text='Add Entry' /></div>
          <Avatar />
        
            
        </div>
    </div>

  )
}

export default Header
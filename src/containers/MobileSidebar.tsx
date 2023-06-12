import { Mobile, SidebarCollapsed, isDarkMode, myTab, toggleMobileSidebar, toggleDarkMode } from '@/redux/themeSlice'
import AppBody from '@/shared/AppBody'
import { lightMode, darkMode } from '@/shared/themeColors'
import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';



const MobileSidebar = () => {
    const {appBodies} = AppBody()
    const isMobile = useSelector(Mobile)
    const currentTab = useSelector(myTab)
    const isSidebarCollapsed = useSelector(SidebarCollapsed)
    const themeDarkMode = useSelector(isDarkMode)
    const dispatch = useDispatch()
    const {bgColor, bgCard, textColor, hover} = themeDarkMode? darkMode: lightMode

    function camelCase(text: string){
        return text.replace(text[0], text[0].toUpperCase())
      }
    
      interface OptionProp{
        icon: React.ReactNode,
         name?: string,
         showName?: boolean,
         collapsed?: boolean,
         onClick: ()=> void
      }
    
      const Option = ({icon, name, showName, collapsed, onClick}: OptionProp) =>{
        function addHighlight() {
          if(currentTab === name){
            return bgColor
          }
          else {
            return ''
          }
        }
        return(
          <div onClick={onClick} className={`flex flex-row  ${textColor} ${addHighlight()} gap-2 w-[100%] items-center ${collapsed? 'pl-4 pr-4' : 'pl-8 pr-8'} p-[0.95rem] rounded-[0.7rem] ${hover} cursor-pointer text-left`}>
            <div>{icon}</div>
            {showName && name && <div className={`${textColor}] `}>{camelCase(name)}</div>}
    
          </div>
        )
      }
  return (
    <div className={`flex  md:hidden  ${themeDarkMode? '': 'myshadow'}  ${bgCard} min-w-[100%]  xs:min-w-[40%] items-center p-4 fixed top-0 left-0 z-[100]  h-[100vh] flex-col gap-[1rem]`}>
        <div className='mb-[2rem] mt-1 w-[100%] flex justify-between items-center'>
            <img src='/assets/logo.svg' /> 
            <div className='flex gap-5 items-center'>
                    <button onClick={()=>{
                    dispatch(toggleDarkMode())
                 console.log(darkMode);
                 }} className={`${textColor} ${hover} p-[0.35rem] flex xs:hidden items-center cursor-pointer justify-center  rounded-[50%] ${bgColor}`}>{themeDarkMode? 
                    <LightModeIcon className='text-center ' /> : 
                    <DarkModeIcon className='text-center'/> }</button>
                    <div className='p-1'><CloseIcon onClick={()=>{
                    
                    dispatch(toggleMobileSidebar())
                }} className={`${textColor}  cursor-pointer`} /></div>
            </div>
            </div>
        {appBodies.map((option)=>(
          <Option key={option.key} onClick={option.onClick} icon={option.icon} name={option.name} showName />
        ))}
      </div>
  )
}

export default MobileSidebar
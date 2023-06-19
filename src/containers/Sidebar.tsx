import { Mobile, SidebarCollapsed, isDarkMode, myTab } from '@/redux/themeSlice'
import AppBody from '@/shared/AppBody'
import { lightMode, darkMode } from '@/shared/themeColors'
import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar =  () => {
  
  const {appBodies} = AppBody()
  const isMobile = useSelector(Mobile)
  const currentTab = useSelector(myTab)
  const isSidebarCollapsed = useSelector(SidebarCollapsed)
  const themeDarkMode = useSelector(isDarkMode)
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

  const fullSidebar = (
      <div className={`hidden  md:flex  ${themeDarkMode? '': 'myshadow'} z-[100]  ${bgCard} min-w-[15rem] items-center p-4 sticky top-0 left-0  h-[100vh] flex-col gap-[1rem]`}>
        <div className='mb-[2rem]'><img src='/assets/logo.svg' /></div>
        {appBodies.map((option)=>(
          <Option key={option.key} onClick={option.onClick} icon={option.icon} name={option.name} showName />
        ))}
      </div>
  )

  const collapsedSidebar = (
    <div className={`hidden md:flex  ${themeDarkMode? '': 'myshadow'}  ${bgCard}  z-[100] min-w-[3rem] items-center p-3 sticky top-0 left-0  h-[100vh] flex-col gap-[1rem]`}>
    <div className='mb-[2rem] mt-[0.3rem]'><img src='/logoShort.svg' /></div>
    {appBodies.map((option)=>(
      <Option key={option.key} onClick={option.onClick} icon={option.icon} name={option.name} collapsed />
    ))}
  </div>
  )
 


  return  isSidebarCollapsed? collapsedSidebar : fullSidebar
}

export default Sidebar
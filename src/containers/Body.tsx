import React from 'react'
import { useSelector } from 'react-redux'
import { myTab } from '@/redux/themeSlice'
import Overview from './Overview'
import History from './History'
import Strategy from './Strategy'
import Tools from './Tools'
import Entry from './Entry'

const Body = () => {
    const currentTab = useSelector(myTab)

    const passTab = ()=>{
        switch(currentTab){
            case 'overview':
                return <Overview/>
                break;
            case 'history':
                return <History/>
                break;
            case 'my strategy':
                return <Strategy/>
                break;
            case 'tools':
                return <Tools />
                break;
            case 'new entry':
                return <Entry />
                 break;
            default:
                return <Overview />
                break;
        }
    }
   
  return(
    <div className='h-auto  md:h-auto'>{passTab()}</div>
  )
}

export default Body
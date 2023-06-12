import React from 'react'
import { useSelector } from 'react-redux'
import { myTab } from '@/redux/themeSlice'
import Overview from './Overview'
import History from './History'
import Strategy from './Strategy'
import Tools from './Tools'

const Body = () => {
    const currentTab = useSelector(myTab)

    const passTab = ()=>{
        switch(currentTab){
            case 'overview':
                return <Overview/>
                break;
            case 'trade history':
                return <History/>
                break;
            case 'my strategy':
                return <Strategy/>
                break;
            case 'tools':
                return <Tools />
                break;
            default:
                return <Overview />
                break;
        }
    }
   
  return(
    <div className='h-[100vh] md:h-auto'>{passTab()}</div>
  )
}

export default Body
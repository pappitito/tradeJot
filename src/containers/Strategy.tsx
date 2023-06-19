import React from 'react'
import { useSelector } from 'react-redux'
import {  isDarkMode } from '@/redux/themeSlice'
import { lightMode, darkMode } from '@/shared/themeColors'
import EditIcon from '@mui/icons-material/Edit';

const Strategy = () => {
  const themeDarkMode = useSelector(isDarkMode)
  const {textColor, bgCard, bgColor, bullet} = themeDarkMode? darkMode: lightMode
  const Dot = ()=> <div className={`w-[0.44rem] ${bullet} h-[0.44rem] mt-[0.62rem] rounded-[50%] mr-2`}> </div>

  const Info = ()=>{
    return (
      <div className={`w-[100%] gap-10 p-6 pt-4 pb-8 max-w-[35.25rem] lg:max-w-[18.5rem] min-h-[44.25rem] items-center flex flex-col ${bgCard} rounded-[1.8rem]`}>
        <div className='flex w-full flex-col'>
            <div className='flex  w-[100%] items-center justify-between'>
              <div className=' text-[1.2rem]'>Trader Info</div>
              <div className={`p-2 flex rounded-[50%] ${bgColor} cursor-pointer `}><EditIcon className='!w-[1rem] !h-[1rem]'/></div>
            </div>
            <div className='text-left w-[100%] mt-3'>Trading type: <span className='ml-[0.3rem] font-semibold'>Swing</span></div>
            <div className='text-left w-[100%] mt-3'>Technique: <span className='ml-[0.3rem] font-semibold'>Technical Analysis</span></div>
            <div className='text-left w-[100%] mt-3'>Sessions: <span className='ml-[0.3rem] font-semibold'>London, New York</span></div>
            <div className='text-[0.8rem] underline w-[100%] mt-2 text-right'>learn more</div>
        </div>
        <div className='flex w-full flex-col'>
            <div className='flex  w-[100%] items-center justify-between'>
              <div className=' text-[1.2rem]'>Time frames</div>
              <div className={`p-2 flex rounded-[50%] ${bgColor} cursor-pointer `}><EditIcon className='!w-[1rem] !h-[1rem]'/></div>
            </div>
            <div className='text-left w-[100%] mt-3'>Trend: <span className='ml-[0.3rem] font-semibold'>Daily or 4hr</span></div>
            <div className='text-left w-[100%] mt-3'>Direction: <span className='ml-[0.3rem] font-semibold'>1Hr</span></div>
            <div className='text-left w-[100%] mt-3'>Entry: <span className='ml-[0.3rem] font-semibold'>15mins</span></div>
            <div className='text-[0.8rem] underline w-[100%] mt-2 text-right'>learn more</div>
        </div>
        <div className='flex w-full flex-col'>
            <div className='flex  w-[100%] items-center justify-between'>
              <div className=' text-[1.2rem]'>Risk management</div>
              <div className={`p-2 flex rounded-[50%] ${bgColor} cursor-pointer `}><EditIcon className='!w-[1rem] !h-[1rem]'/></div>
            </div>
            <div className='text-left w-[100%] mt-3'>Risk Capital: <span className='ml-[0.3rem] font-semibold'>$5000</span></div>
            <div className='text-left w-[100%] mt-3'>Risk per trade: <span className='ml-[0.3rem] font-semibold'>0.5%</span></div>
            <div className='text-left w-[100%] mt-3'>Avg R/R ratio: <span className='ml-[0.3rem] font-semibold'>2.56</span></div>
            <div className='text-left w-[100%] mt-3'>Maximum exposure: <span className='ml-[0.3rem] font-semibold'>5%</span></div>
            <div className='text-[0.8rem] underline w-[100%] mt-2 text-right'>learn more</div>
        </div>
      </div>
    )
  }
  const Criteria = ()=>{

    return (
      <div className={`w-[100%] p-6 pt-4 pb-8 h-[100%]  md:min-h-[28rem] items-center flex flex-col ${bgCard} rounded-[1.8rem]`}>
        <div className='flex w-full flex-col'>
            <div className='flex  w-[100%] items-center justify-between'>
              <div className=' text-[1.2rem]'>Entry Criteria</div>
              <div className={`p-2 flex rounded-[50%] ${bgColor} cursor-pointer `}><EditIcon className='!w-[1rem] !h-[1rem]'/></div>
            </div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/>Retracement and Reaction </div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/> All three time frames must align according to the trend direction </div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/> Candle stick pattern must show rejection in either demand or supply zone</div>
            
            <div className=' text-[1.2rem] text-[#F90D0D] mt-4 mb-1'>Stop loss</div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/>Retracement and Reaction </div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/> All three time frames must align according to the trend direction </div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/> Candle stick pattern must show rejection in either demand or supply zone</div>
            
            <div className=' text-[1.2rem] text-[#4DCD4A] mt-4 mb-1'>Take profit</div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/>Retracement and Reaction </div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/> All three time frames must align according to the trend direction </div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/> Candle stick pattern must show rejection in either demand or supply zone</div>
            

            <div className='text-[0.8rem] underline w-[100%] mt-2 text-right'>learn more</div>
        </div>
      </div>
    )
  }
  const Rules = ()=>{
    return (
      <div className={`w-[100%] p-6 pt-4 pb-8  h-[100%] md:min-h-[15rem] items-center flex flex-col ${bgCard} rounded-[1.8rem]`}>
        <div className='flex  w-[100%] items-center justify-between'>
              <div className=' text-[1.2rem]'>Trading rules</div>
              <div className={`p-2 flex rounded-[50%] ${bgColor} cursor-pointer `}><EditIcon className='!w-[1rem] !h-[1rem]'/></div>
            </div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/>do not revenge trade. </div>
            <div className='text-left flex items-start leading-7 w-[100%]'><Dot/> always wait for confirmation as that is your edge </div>
          
      </div>
    )
  }

  return (
    <div className={`w-[100%]   flex gap-4 xsm:gap-5   ${textColor} p-4 md:pt-8  lg:mt-6 justify-center ${bgColor}   items-center   `}>
      <div className='w-[100%] flex flex-col h-[100%] lg:justify-center min-h-[44rem] items-center lg:items-stretch lg:flex-row  gap-4 xsm:gap-5'>
      <Info />
      <div className='flex w-[100%] h-[100%]  max-w-[35.25rem] lg:w-[50%] min-w-[16rem]  gap-4 xsm:gap-5 flex-col'>
        <Criteria />
        <Rules />
      </div>
      </div>
    </div>
  )
}

export default Strategy
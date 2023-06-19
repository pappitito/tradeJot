import React from 'react'
import { useSelector } from 'react-redux'
import {  isDarkMode } from '@/redux/themeSlice'
import { lightMode, darkMode } from '@/shared/themeColors'
import { dataType } from '@/shared/typing'
import HistoryTable from '@/components/overview/HistoryTable'
import Instrument from '@/components/overview/Instrument'
import StatusCheck from '@/components/overview/StatusCheck'
import Tracker from '@/components/overview/Tracker'



const Overview = () => {
  const themeDarkMode = useSelector(isDarkMode)
  const {textColor, bgCard, bgColor} = themeDarkMode? darkMode: lightMode

  const data : dataType[] = [
    {
      ticker: 'eurusd',
      duration: 2,
      pips: +43,
      riskReward: 2.84
    },
    {
      ticker: 'gbpusd',
      duration: 2,
      pips: -16.4,
      riskReward: 2.48
    },
    {
      ticker: 'gbpusd',
      duration: 2,
      pips: 66.4,
      riskReward: 2.48
    },
    {
      ticker: 'USDCAD',
      duration: 2,
      pips: 0,
      riskReward: 2.48
    },
    {
      ticker: 'USDCAD',
      duration: 2,
      pips: 50,
      riskReward: 2.48
    },
    {
      ticker: 'USDCAD',
      duration: 2,
      pips: 50,
      riskReward: 2.48
    },

    {
      ticker: 'USDJPY',
      duration: 2,
      pips: 46,
      riskReward: 2.48
    } ]

  interface OptionP {
    figure: string, 
    title: string,
    colored?: boolean
  }
  
   const Figures = ( {figure, title, colored}: OptionP) => {
    return (
      <div className='flex flex-col gap-0 items-center'>
        <div className={` text-[2rem] xsm:text-[2.5rem] ${colored && 'text-[#4DCD4A]'}`}>{figure}</div>
        <div className='mt-[-0.3rem] text-[0.9rem] xsm:text-[1rem]'>{title}</div>
      </div>
    )
  }
  

  const TradeStatistics = ()=>{
    return(
      <div className={`w-[100%] pt-3 pb-5 p-3 xsm:p-6 xsm:pt-4 xsm:pb-8 xsm:max-w-[24rem] h-[100%] xsm:min-h-[14.8rem] items-center justify-center  flex flex-col ${bgCard} rounded-[1.8rem]`} >
        <div className='text-left w-[100%] pl-2 xsm:pl-3'>Trade Statistics</div>
        
          <div className='flex mt-2  gap-[2rem]'>
           <div className='flex flex-col items-center'>
               <Figures figure='24' title='Total' />
              <Figures figure='2.68' title='Avg R/R' />
           </div>
            <div className='flex flex-col items-center'>
              <Figures figure='16' title='Wins' colored />
              <Figures figure='66%' title='Win Rate' />
            </div>
            <div className='flex flex-col items-center'>
              <Figures figure='8' title='Losses' />
              <Figures figure='0.5%' title='Risk' />
            </div>
        </div>
      </div>
    )
  }

  const TopInstrument = ()=>{
    return(
      <div className={`w-[100%] p-6 pt-4 pb-8 xsm:max-w-[16rem] h-[100%] min-h-[14.8rem] min-w-[12rem] items-center flex flex-col ${bgCard} rounded-[1.8rem]`}>
        <div className='text-left w-[100%] mb-2 xsm:pl-3'>Top Instrument</div>
        <Instrument data={data} />
        

        
      </div>
    )
  }

  const Analytics = () => {
    return (
      <div className={`w-[100%] p-6 pt-4 pb-8 max-w-[41.25rem] h-[100%] min-h-[22.8rem] items-center flex flex-col ${bgCard} rounded-[1.8rem]`}>
        <div className='text-left w-[100%] xsm:pl-3'>Analytics</div>
      </div>
    )
  }

  const GoalTracker = () => {
    return (
      <div className={`w-[100%] p-6 pt-4 pb-8   min-h-[7.8rem] items-center flex flex-col ${bgCard} rounded-[1.8rem]`}>
        <div className='text-left w-[100%] xsm:pl-3'>Goal Tracker</div>
        <div className='w-[95%] mt-4'>
          <Tracker percentage={70} />
        </div>
      </div>
    )
  }

  const History = () => {
    return (
      <div className={`w-[100%] p-4 pt-4 pb-8  h-[100%] min-h-[17.8rem] items-center flex flex-col ${bgCard} rounded-[1.8rem]`}>
        <div className='text-left w-[100%] xsm:pl-3 mb-3'>History</div>
        <HistoryTable props={data.slice(0,7)} />
        <div className='text-[0.8rem] underline w-[100%] mt-5 mb-[-1rem] text-right'>See more</div>

        
      </div>
    )
  }

  const Status = () => {
    return (
      <div className={`w-[100%] p-6 pt-4 pb-8   min-h-[7.2rem] items-center flex flex-col ${bgCard} rounded-[1.8rem]`}>
        <div className='text-left w-[100%] xsm:pl-3'>Status</div>
        <StatusCheck />
        <div className='text-[0.8rem] underline w-[100%] mt-2 text-right'>See more</div>
      </div>
    )
  }

  return (
    <div className={`w-[100%]  flex   ${textColor} p-4 md:pt-8  blg:mt-6 justify-center ${bgColor}   items-start   `}>
      
        <div className='w-[100%] max-w-[61.5rem] flex flex-col items-center blg:items-stretch blg:flex-row  gap-4 xsm:gap-5'>
        <div className='flex w-[100%] m-0 flex-col items-center gap-4 xsm:gap-5'>
          <div className='flex flex-col xsm:flex-row w-[100%] m-0 justify-center gap-4 xsm:gap-5'>
            <TradeStatistics/>
            <TopInstrument/>
          </div>
            <Analytics/>
        </div>
        <div className='flex w-[100%] max-w-[41.25rem] blg:w-[50%] min-w-[16rem] blg:max-w-[19rem] gap-4 xsm:gap-5 flex-col'>
          <GoalTracker/>
          <History/>
          <Status />

        </div>
        </div>
      
      </div>
  )
}

export default Overview
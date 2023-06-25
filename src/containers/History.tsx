import { isDarkMode } from '@/redux/themeSlice'
import { darkMode, lightMode } from '@/shared/themeColors'
import { dataType } from '@/shared/typing'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { data } from './Overview'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';



const History = () => {

  const themeDarkMode = useSelector(isDarkMode)
  const {textColor, bgCard, bgColor, bullet, borderT} = themeDarkMode? darkMode: lightMode
  const Dot = ()=> <div className={`min-w-[0.44rem] ${bullet} h-[0.44rem] mt-[0.62rem] rounded-[50%] mr-2`}> </div>


  const DataRow = ({ pips, ticker, riskReward, criteria, duration, stopLoss, takeProfit, lots, profit, notes, currency }: dataType) =>{
    const [expanded, setExpanded] = useState(false)
    const collapsed = (
      <div className={`flex p-2 pl-3 pr-3 gap-1 text-[1rem]  justify-between  items-center border-t-[1px] ${borderT} w-full`}>
          <div className='flex flex-row w-full gap-2 xs:max-w-[80%] mlg:max-w-[40%] xsm:max-w-[60%]'>
          <div className='  flex items-center justify-between  min-w-[5.2rem] mr-1 '>
             {(pips > 0)? <div className='min-w-[1.1rem] h-[0.5rem] rounded-[0.25rem] bg-[#4DCD4A]'></div> :
                 (pips < 0)? <div className='min-w-[1.1rem] h-[0.5rem] rounded-[0.25rem] bg-[#F90D0D]'></div> :
                 <div className='min-w-[1.1rem] h-[0.5rem] rounded-[0.25rem] bg-[#FFCA0F]'></div>
             }
             <div className='text-[1rem] ml-1 mr-1 w-full text-center'>{ticker.toUpperCase()}</div>
                        
          </div>
          <div className='  flex-nowrap whitespace-nowrap text-center  hidden xs:flex   w-full max-w-[100%] overflow-hidden '>{criteria? criteria: '...'}</div>
          </div>
          <div className=' w-full  inline xs:hidden  '>{pips}</div>
        <div className='flex w-[100%] xs:max-w-[20%]  mlg:max-w-[60%] xsm:max-w-[40%] justify-between items-center'>
          <div className=' w-full whitespace-nowrap ml-2 hidden md:inline   '>{(pips > 0)? 'Won': (pips < 0)? 'Lost': 'Break Even'}</div>
          <div className=' w-full  hidden mlg:inline  '>{duration}</div>
          <div className=' w-full hidden blg:inline  '>{stopLoss}</div>
          <div className=' w-full hidden elg:inline '>{takeProfit}</div>
          <div className=' w-full  hidden sxl:inline  '>{lots}</div>
          
          <div className=' w-full hidden xsm:inline  '>{riskReward}</div>
          <div className=' w-full  whitespace-nowrap flex min-w-[4rem]  pl-2 gap-4  items-center justify-between '>
            <div className='flex w-full justify-center'>{profit} {currency}</div> 
            <div onClick={()=> setExpanded(true)} className={`p-[0.1rem] rounded-[50%] cursor-pointer ${bgColor} `}><KeyboardArrowDownIcon/></div> </div>
        </div>
        </div>
    )
    const full = (
      <div className={`w-[100%] border-t-[1px] ${borderT} p-3 flex flex-col`}>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
          {(pips > 0)? <div className='min-w-[1.1rem] h-[0.5rem] rounded-[0.25rem] bg-[#4DCD4A]'></div> :
                 (pips < 0)? <div className='min-w-[1.1rem] h-[0.5rem] rounded-[0.25rem] bg-[#F90D0D]'></div> :
                 <div className='min-w-[1.1rem] h-[0.5rem] rounded-[0.25rem] bg-[#FFCA0F]'></div>
             }
             <div className='text-[1.3rem] ml-1 mr-1 w-full text-center'>{ticker.toUpperCase()}   <span className='ml-3'>{profit}{currency}</span>    </div>
          </div>
          <div className='flex gap-3'>
            <div className={`p-2 flex rounded-[50%] ${bgColor} cursor-pointer `}><EditIcon className='!w-[1rem] !h-[1rem]'/></div>
            <div onClick={()=> setExpanded(false)} className={`p-[0.2rem] rounded-[50%] rotate-180 cursor-pointer ${bgColor} `}><KeyboardArrowDownIcon className='!w-[1.6rem] !h-[1.6rem]'/></div> 
          </div>
        </div>
        <div className='flex flex-col-reverse gap-3 justify-center lg:flex-row w-full lg:justify-between items-start p-4'>
             <div className='flex flex-wrap    pl-3 w-full xsm:max-w-[80%] lg:max-w-[90%] justify-normal gap-3  '>
                <div className='flex  flex-col gap-2'>
                    <div className='flex  boldspan xsm:pr-3'> Status: 
                      <span className='ml-2'>{(pips > 0)? 'Won': (pips < 0)? 'Lost': 'Break Even'}</span>
                     </div>
                     <div className='flex boldspan gap-2  xsm:pr-3'>Duration: <span>{duration}</span></div>
                </div>
                 <div className='flex flex-col gap-2'>
                    <div className='flex boldspan gap-2 pr-3'>Stop Loss: <span>{stopLoss}pips</span></div>
                    <div className='flex boldspan gap-2   pr-3'>Take Profit: <span>{takeProfit}</span></div>
                 </div>
                 <div className='flex flex-col gap-2'>
                      <div className='flex boldspan gap-2  pr-3'>Lot Size: <span>{lots}</span></div>
                      <div className='flex boldspan gap-2  pr-3'>Pips: <span>{pips}</span></div>
                 </div>
                 <div className='flex gap-2 boldspan  pr-3'>Risk to Reward ration: <span>{riskReward}</span></div>
                 <div className='flex gap-2 boldspan  w-full text-left '>Criteria:   {criteria}</div>
                 {notes && 
                     <div className='w-full'>
                          <div className='text-center fweight6 mt-[-0.3rem] mb-1'>Notes to self</div>
                     <div className='flex items-start text-left'><Dot/>{notes}</div>
              </div>
                 }
             </div>
             <div className='w-full flex  mb-3 lg:mb-0 mr-6 justify-center'>
                <img className='w-full border-none max-w-[25rem] rounded-[1.2rem] h-[13rem] lg:mt-[-1rem]  bg-slate-600' src="" alt="" />

             </div>
        </div>
        <div className='flex-col flex'>

        </div>
      </div>
    )
    return expanded? full : collapsed
  }
  const MyTable = ()=>{

    return(
      <div className={`flex flex-col h-[100%] text-center text-[1.1rem]  min-h-[43rem] w-[100%] min-w-[2rem] ${bgCard} max-w-[80rem] rounded-[1.8rem]`}>
        <div className={`flex p-3 justify-between  pt-4   w-full`}>
          <div className='flex flex-row w-full xs:max-w-[80%] mlg:max-w-[40%] xsm:max-w-[60%]'>
            <div className=' w-full max-w-[30%] '>Ticker</div>
            <div className=' w-full hidden xs:inline text-center max-w-[70%] '>Criteria</div>
          </div>
          <div className=' w-full  inline xs:hidden '>Pips</div>
         <div className='flex w-[100%] xs:max-w-[20%] mlg:max-w-[60%] xsm:max-w-[40%] justify-between items-center'>
          <div className=' w-full ml-2 hidden md:inline   '>Status</div>
          <div className=' w-full hidden mlg:inline   '>Duration</div>
          <div className=' w-full hidden blg:inline  '>SL(pips)</div>
          <div className=' w-full hidden elg:inline  '>TP(pips)</div>
          <div className=' w-full  hidden sxl:inline '>Lots</div>
          
          <div className=' w-full hidden xsm:inline   '>R/R ratio</div>
          <div className=' w-full  '>Profit/Loss</div>
         </div>
        </div>
        {data && data.map((item)=>(
          <DataRow pips={item.pips} ticker={item.ticker} notes={item.notes} duration={item.duration} profit={item.profit} currency={item.currency} criteria={item.criteria} lots={item.lots} stopLoss={item.stopLoss} takeProfit={item.takeProfit} riskReward={item.riskReward} />
        ))}
      </div>
    )
  }


  return (
    <div className={`w-[100%]   p-4 flex justify-center ${textColor}`}>
      <MyTable/>
    </div>
  )
}

export default History
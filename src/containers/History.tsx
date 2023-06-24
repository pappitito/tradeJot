import { isDarkMode } from '@/redux/themeSlice'
import { darkMode, lightMode } from '@/shared/themeColors'
import { dataType } from '@/shared/typing'
import React from 'react'
import { useSelector } from 'react-redux'
import { data } from './Overview'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const History = () => {

  const themeDarkMode = useSelector(isDarkMode)
  const {textColor, bgCard, bgColor, borderB} = themeDarkMode? darkMode: lightMode


  const DataRow = ({ pips, ticker, riskReward, criteria, duration, stopLoss, takeProfit, lots, profit, currency }: dataType) =>{
    return (
      <div className={`flex p-2 pl-3 pr-3 gap-1  justify-between  items-center border-b-[1px] ${borderB} w-full`}>
          <div className='flex flex-row w-full gap-2 xs:max-w-[80%] mlg:max-w-[40%] xsm:max-w-[60%]'>
          <div className='  flex items-center justify-between  min-w-[5.2rem] mr-1 '>
             {(pips > 0)? <div className='min-w-[1.1rem] h-[0.5rem] rounded-[0.25rem] bg-[#4DCD4A]'></div> :
                 (pips < 0)? <div className='min-w-[1.1rem] h-[0.5rem] rounded-[0.25rem] bg-[#F90D0D]'></div> :
                 <div className='min-w-[1.1rem] h-[0.5rem] rounded-[0.25rem] bg-[#FFCA0F]'></div>
             }
             <div className='text-[1rem] ml-1 mr-1 w-full text-center'>{ticker.toUpperCase()}</div>
                        
          </div>
          <div className='  flex-nowrap whitespace-nowrap text-center  hidden xs:flex   w-full max-w-[100%] overflow-auto '>{criteria? criteria: '...'}</div>
          </div>
          <div className=' w-full  inline xs:hidden  '>{pips}</div>
        <div className='flex w-[100%] xs:max-w-[20%]  mlg:max-w-[60%] xsm:max-w-[40%] justify-between items-center'>
          <div className=' w-full whitespace-nowrap ml-2 hidden md:inline   '>{(pips > 0)? 'Won': (pips < 0)? 'Lost': 'Break Even'}</div>
          <div className=' w-full  hidden mlg:inline  '>{duration}</div>
          <div className=' w-full hidden blg:inline  '>{stopLoss}</div>
          <div className=' w-full hidden elg:inline '>{takeProfit}</div>
          <div className=' w-full  hidden sxl:inline  '>{lots}</div>
          
          <div className=' w-full hidden xsm:inline  '>{riskReward}</div>
          <div className=' w-full  whitespace-nowrap flex min-w-[4rem]  pl-2 gap-4  items-center justify-center '>
            <div>{profit} {currency}</div> 
            <div className={`p-[0.1rem] rounded-[50%] ${bgColor} `}><KeyboardArrowDownIcon/></div> </div>
        </div>
        </div>
    )
  }
  const MyTable = ()=>{

    return(
      <div className={`flex flex-col h-[100%] text-center   min-h-[90%] w-[100%] min-w-[2rem] ${bgCard} max-w-[80rem] rounded-[1.8rem]`}>
        <div className={`flex p-3 justify-between  pt-4 border-b-[1px] ${borderB} w-full`}>
          <div className='flex flex-row w-full xs:max-w-[80%] mlg:max-w-[40%] xsm:max-w-[60%]'>
            <div className='font-semibold w-full max-w-[30%] '>Ticker</div>
            <div className='font-semibold w-full hidden xs:inline text-center max-w-[70%] '>Criteria</div>
          </div>
          <div className='font-semibold w-full  inline xs:hidden '>Pips</div>
         <div className='flex w-[100%] xs:max-w-[20%] mlg:max-w-[60%] xsm:max-w-[40%] justify-between items-center'>
          <div className='font-semibold w-full ml-2 hidden md:inline   '>Status</div>
          <div className='font-semibold w-full hidden mlg:inline   '>Duration</div>
          <div className='font-semibold w-full hidden blg:inline  '>SL(pips)</div>
          <div className='font-semibold w-full hidden elg:inline  '>TP(pips)</div>
          <div className='font-semibold w-full  hidden sxl:inline '>Lots</div>
          
          <div className='font-semibold w-full hidden xsm:inline   '>R/R ratio</div>
          <div className='font-semibold w-full  '>Profit/Loss</div>
         </div>
        </div>
        {data && data.map((item)=>(
          <DataRow pips={item.pips} ticker={item.ticker} duration={item.duration} profit={item.profit} currency={item.currency} criteria={item.criteria} lots={item.lots} stopLoss={item.stopLoss} takeProfit={item.takeProfit} riskReward={item.riskReward} />
        ))}
      </div>
    )
  }


  return (
    <div className={`w-[100%] h-[90vh] p-4 flex justify-center ${textColor}`}>
      <MyTable/>
    </div>
  )
}

export default History
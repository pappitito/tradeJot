import { dataType } from '@/shared/typing'
import React from 'react'

interface myProp{
    props: dataType[]
}
const HistoryTable = ({props}: myProp) => {

    const Ticker = () =>{
        return (
            <div className='flex flex-col gap-2 items-start'>
                <div className='text-[0.85rem]'>Ticker</div>
                {props.map(({ticker, pips})=>{
                    return(
                        <div className='flex items-center gap-[0.35rem]'>
                            {(pips > 0)? <div className='w-[1.2rem] h-[0.5rem] rounded-[0.25rem] bg-[#4DCD4A]'></div> :
                                (pips < 0)? <div className='w-[1.2rem] h-[0.5rem] rounded-[0.25rem] bg-[#F90D0D]'></div> :
                                <div className='w-[1.2rem] h-[0.5rem] rounded-[0.25rem] bg-[#FFCA0F]'></div>
                            }
                            <div className='text-[1rem]'>{ticker.toUpperCase()}</div>
                        </div>
                    )
                })}

            </div>
        )
    }
    const Duration = ()=>{
        return (
            <div className='flex flex-col gap-2 items-center'>
                <div className='text-[0.85rem]'>Duration</div>
                {props.map(({duration})=> (
                    <div className='text-[1rem]'>{duration? `${duration}H`: ''}</div>
                ))}
            </div>
        )
    }
    const Pips = ()=>{
        return (
            <div className='flex flex-col gap-2 items-center'>
                <div className='text-[0.85rem]'>Pips</div>
                {props.map(({pips})=> (
                    <div className='text-[1rem]'>{pips? pips: '0'}</div>
                ))}
            </div>
        )
    }
    const Risk = ()=>{
        return (
            <div className='flex flex-col gap-2 items-center'>
                <div className='text-[0.85rem]'>R/R ratio</div>
                {props.map(({riskReward})=> (
                    <div className='text-[1rem]'>{riskReward? riskReward: ''}</div>
                ))}
            </div>
        )
    }

  return (
    <div className='flex justify-between w-[100%]'>
        <Ticker />
        <Duration/>
        <Pips/>
        <Risk/>
    </div>
  )
}

export default HistoryTable
import { dataType } from '@/shared/typing'
import React from 'react'

interface myProp{
    data: dataType[]
}

const Instrument = ({data}: myProp) => {

    function getTopInstrument(arr: dataType[]){
        interface counter{
            ticker: string
            count: number
        }
        var instrumentsWon: counter[] = []
        const won = arr.filter((item)=> item.pips > 0)
      
        
       won.forEach(({ ticker }) => {
            const tickerLowerCase = ticker.toLowerCase();
             const existingItem = instrumentsWon.find(item => item.ticker.toLowerCase() === tickerLowerCase);

            if (existingItem) {
              existingItem.count++;
            } else {
              instrumentsWon.push({
                ticker: tickerLowerCase,
                count: 1
             });
             }
            });
       
       
        return instrumentsWon.sort((a,b)=> b.count - a.count).slice(0,4)

    }

    const topInstruments = getTopInstrument(data)
    var counter = 0
  return (
    <div className='flex w-[100%] justify-between'>
       <div className='flex flex-col items-start gap-2'>
       <div className='text-[0.85rem]' >Ticker</div>
        {topInstruments.map(({ticker})=>{
            counter++
            return(
                <div>{counter}. {ticker.toUpperCase()}</div>
            )
        })}
       </div>
        <div className='flex flex-col items-center gap-2'>
        <div className='text-[0.85rem]'>Wins</div>
        {topInstruments.map(({count})=>{
            return(
                <div>{count}</div>
            )
        })}
        </div>
    </div>
  )
}

export default Instrument
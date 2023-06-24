import React from "react"
import { JsxElement } from "typescript"



export interface BodyElement  {
    key: number,
    name: string,
    icon: React.ReactNode,
    onClick: ()=> void,
    
}
export interface dataType {
    ticker: string
    duration?: number
    criteria?: string,
    pips: number
    stopLoss?: number,
    takeProfit?: number,
    lots?: number
    riskReward: number
    profit?: number,
    currency?: string

  }
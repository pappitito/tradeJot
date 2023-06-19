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
    pips: number
    riskReward: number
  }
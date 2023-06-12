import React from "react"
import { JsxElement } from "typescript"



export interface BodyElement  {
    key: number,
    name: string,
    icon: React.ReactNode,
    onClick: ()=> void,
    
}
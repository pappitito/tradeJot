import React from 'react'
import { JsxElement } from 'typescript'

interface Props {
    text: React.ReactNode | string
    isSubmit?: boolean
}

const Button = ({text, isSubmit}: Props) => {
  return (
    <button type={isSubmit? 'submit' : 'button'} 
     className={`flex p-2 w-[100%] bg-[#263CFA] rounded-[2rem] items-center justify-center text-[0.85rem] text-[#E8E8E8]`}>{text}</button>
  )
}

export default Button
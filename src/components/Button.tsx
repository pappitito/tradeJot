import React from 'react'
import { JsxElement } from 'typescript'

interface Props {
    text: React.ReactNode | string
    isSubmit?: boolean
    onClick?: ()=>void
}

const Button = ({text, isSubmit, onClick}: Props) => {
  return (
    <button onClick={onClick} type={isSubmit? 'submit' : 'button'} 
     className={`flex p-2 w-[100%] bg-[#263CFA] rounded-[2rem] items-center justify-center text-[0.85rem] text-[#E8E8E8]`}>{text}</button>
  )
}

export default Button
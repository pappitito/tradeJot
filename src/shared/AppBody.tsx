import { useDispatch } from "react-redux";
import { BodyElement } from "./typing";
import React from 'react'
import { setCurrentTab } from "@/redux/themeSlice";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';



const AppBody = () =>{

    const dispatch = useDispatch()

    const handleClick = (tabName: string) =>{
        const payload = {
            name: tabName
        }
        
        
        dispatch(setCurrentTab(payload))
    }
    
    const appBodies : BodyElement[] = [
        {
            key: 1,
            name: 'overview',
            icon: <HomeIcon/>,
            onClick: ()=> handleClick('overview')
            


        },
        {
            key: 2,
            name: 'trade history',
            icon: <HistoryIcon/>,
            onClick: ()=> handleClick('trade history')
            


        },
        {
            key: 3,
            name: 'my strategy',
            icon: <HistoryIcon/>,
            onClick: ()=> handleClick('my strategy')
            


        },
        {
            key: 4,
            name: 'tools',
            icon: <HistoryIcon/>,
            onClick: ()=> handleClick('tools')
            


        }
    ]

    return {appBodies}
}
export default AppBody
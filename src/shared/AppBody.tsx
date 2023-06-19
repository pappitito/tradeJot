import { useDispatch } from "react-redux";
import { BodyElement } from "./typing";
import React from 'react'
import { setCurrentTab, toggleMobileSidebar } from "@/redux/themeSlice";
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ConstructionIcon from '@mui/icons-material/Construction';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';



const AppBody = () =>{

    const dispatch = useDispatch()

    const handleClick = (tabName: string) =>{
       
        
        
        dispatch(setCurrentTab(tabName))
        dispatch(toggleMobileSidebar())
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
            icon: <LightbulbCircleIcon/>,
            onClick: ()=> handleClick('my strategy')
            


        },
        {
            key: 4,
            name: 'tools',
            icon: <ConstructionIcon/>,
            onClick: ()=> handleClick('tools')
            


        }
    ]

    return {appBodies}
}
export default AppBody
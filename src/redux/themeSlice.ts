import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false,
        currentTab: 'overview',
        sidebarCollapsed: false,
        mobile: false

    },
    reducers:{
        toggleDarkMode: (state) =>{
            state.darkMode = !state.darkMode
        },
        setCurrentTab: (state, action) =>{
            state.currentTab = action.payload.name
        },
        collapseSidebar: (state) =>{
            state.sidebarCollapsed = !state.sidebarCollapsed
        },
        toggleMobileSidebar: (state) =>{
            state.mobile = !state.mobile
        }

    }
})

export const {toggleDarkMode, setCurrentTab, collapseSidebar, toggleMobileSidebar} = themeSlice.actions

export const isDarkMode = (state: any) => state.theme.darkMode
export const myTab = (state:any) => state.theme.currentTab
export const SidebarCollapsed = (state: any) => state.theme.sidebarCollapsed
export const Mobile = (state:any) => state.theme.mobile

export default themeSlice.reducer
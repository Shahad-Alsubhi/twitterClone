import BottomNavigation from '../components/BottomNav'
import QuillPen from "../components/QuillPen"
import SearchPage from './SearchPage'
import { Outlet } from 'react-router-dom'


export default function HomePage(){
    return(
        
        <div className='flex justify-center p-4 pt-0 flex-row-reverse max-[500px]:p-0 max-[500px]:pb-[50px] ' >
        <SearchPage style={"max-[990px]:hidden max-w-[22rem] pl-8"}/>       
        <div className='max-h-screen overflow-scroll custom-scroll border-[0.1px] border-b-0 border-t-0  border-custom-border-color'>
        
        <Outlet/>
        </div>
        <QuillPen style="fixed bottom-16 right-5 min-[500px]:hidden "/>
        <BottomNavigation/>
        </div>
        
    )
}
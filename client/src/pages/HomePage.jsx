import { useContext } from 'react'
import BottomNavigation from '../components/BottomNav'
import QuillPen from "../components/QuillPen"
import SearchPage from './SearchPage'
import { Outlet } from 'react-router-dom'
import { SearchContext } from '../context/searchContext'


export default function HomePage(){
    const {search}=useContext(SearchContext)



    return(
        <div className='flex justify-center p-4 pt-0 flex-row-reverse max-[500px]:p-0 max-[500px]:pb-[50px] ' >
       <div className='max-[990px]:hidden w-full max-w-[22rem] '>
       {search&&<SearchPage /> }
      {!search&& <div className='border-[#252424] rounded-lg p-4  w-11/12 border-2 mt-10 ml-6 '>
       <h1 className="text-xl font-extrabold text-white">
        What&apos;s happening</h1>
        <p className="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, 
          laboriosam quod nihil sint reiciendis temporibus libero dolorum numquam enim, 
          rerum repellendus quaerat inventore distinctio ipsam suscipit eum a dicta ducimus. <br /> <br />

           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, quos! Tenetur aspernatur labore hic aliquid quibusdam, vel molestias quas similique blanditiis quos velit consequatur officia, illo sed minima mollitia natus!
        </p>       </div>}
         </div> 
        <div className='max-h-screen overflow-scroll custom-scroll border-[0.1px] border-b-0 border-t-0 w-full max-w-[41rem] border-custom-border-color'>
        
        <Outlet/>
        </div>
        <QuillPen style="fixed bottom-16 right-5 min-[500px]:hidden "/>
        <BottomNavigation/>

        </div>
        
    )
}


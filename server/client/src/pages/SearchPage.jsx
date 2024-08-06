import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import UserController from '../controllers/userController';
import  Avatar  from '../components/Avatar';
import CloseIcon from '@mui/icons-material/Close';

const SearchPage = ({style
}) => {


  const [searchTerm,setSearchTerm]=useState("")
  const {getSearchResults}=UserController()
  const [searchResult,setSearchResult]=useState([])


  const handleSearch=async (searchTerm)=>{
    const results=await getSearchResults(searchTerm)
    setSearchResult(results)
  }
    
  return (
    <div className={` ${style} p-5 pt-2  max-h-screen `}>
      <div className='flex flex-row rounded-full h-11 bg-[#202327] items-center justify-between pr-5 mb-4'>
     <input type="text" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder='Search' className='bg-transparent placeholder:text-custom-gray 
     placeholder:text-sm   min-w-1 pl-6 focus:outline-none  ' /><span >{searchTerm&&<CloseIcon className='text-custom-gray mr-2 cursor-pointer ' onClick={()=>{setSearchTerm("");setSearchResult([])}}/>}
     <SearchIcon className='text-custom-gray cursor-pointer'
      onClick={()=>{handleSearch(searchTerm)}}/></span></div>
     

    {!searchTerm &&<div className=" border-[#252424] rounded-lg p-4 w w-full border-2 ">
        <h1 className="text-xl font-extrabold text-white">
        What&apos;s happening</h1>
        <p className="mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, 
          laboriosam quod nihil sint reiciendis temporibus libero dolorum numquam enim, 
          rerum repellendus quaerat inventore distinctio ipsam suscipit eum a dicta ducimus.
        </p>
    </div>}
    <div>
      {searchResult.map(result=>(
        <div key={result._id} className='flex flex-row gap-3 mb-3'>
        <Avatar img={result.profile_picture_url}/>
        <div className="">
        <h1 className='font-bold'>{result.name}</h1>
        <h5 className='text-custom-gray'>@{result.username}</h5>
        </div>
        </div>    
      ))}
    </div>
      
    </div>
  )
}

export default SearchPage

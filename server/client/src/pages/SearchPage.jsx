

const SearchPage = ({style
}) => {
  return (
    <div className={` ${style} p-5 pt-2  max-h-screen `}>
     <input type="text" placeholder='Search' className='bg-[#202327] placeholder:text-custom-gray placeholder:text-sm  rounded-full h-11 w-full min-w-72 pl-6 '/>

    <div className=" border-[#252424] rounded-lg p-4 w w-full mt-4 border-2 ">
        <h1 className="text-xl font-extrabold text-white">
        What&apos;s happening</h1>
        <p className="mt-5">        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, laboriosam quod nihil sint reiciendis temporibus libero dolorum numquam enim, rerum repellendus quaerat inventore distinctio ipsam suscipit eum a dicta ducimus.
        </p>
        
    </div>
      
    </div>
  )
}

export default SearchPage

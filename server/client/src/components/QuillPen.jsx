
import quillPen from '../assets/quill-pen.png'

const QuillPen = ({style}) => {
    return (
      <div className={`avatar w-14 h-14 ${style} cursor-pointer xl:w-[90%] xl:h-12 `} onClick={()=>document.getElementById('CreateTweet').showModal()}>
      <div className=' rounded-full block bg-custom-blue pl-5 pt-[1.15rem] pb-4 pr-4 xl:w-[90%] xl:p-3 before:content-["+"] xl:before:content-none before:text-white before:w-1 before:h-1 before:absolute before:left-[1rem] before:top-[0.578rem]'> 
        <img src={quillPen} className='rotate-6 xl:hidden  ' />
        <h1 className='text-center font-extrabold max-xl:hidden'>Post</h1>
      </div>
    </div>
      )
}

export default QuillPen

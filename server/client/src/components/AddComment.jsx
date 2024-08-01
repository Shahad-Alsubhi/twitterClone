
import Avatar from './Avatar';
import TweetContent from './tweetContent'
const AddComment = () => {
 
    return (
        <dialog id="AddComment" className="modal items-start pt-10 max-sm:bg-black bg-[#5b708366]  ">
        <div className="modal-box bg-black w-full p-0">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
          </form>
      
        <div className="hero-content flex-col ">
          
            <form className="card-body p-0 w-[90%] pt-8 min-h-56 ">
            <TweetContent newReply={true}/>

            <div className='flex items-center gap-3 mb-8 p-4 pt-0 pl-0'>
              <Avatar/>
            <textarea  placeholder="Post your reply" rows="5" type="text" className="input w-full text-lg font-extralight  border-none outline-none placeholder:text-base  bg-transparent focus:border-none mt-5"  >
              </textarea>
            </div>
              <div className="form-control flex-row justify-end">
                <button className="btn items-end btn-primary bg-custom-blue rounded-full hover:bg-custom-blue outline-none min-h-0 h-10 mt-2 w-fit ">Reply</button>
      
              </div>
      
            </form>
        </div>
      </div>
      
      </dialog>);
}

export default AddComment

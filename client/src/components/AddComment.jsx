
import { useContext } from 'react';
import Avatar from './Avatar';
import { useForm } from "react-hook-form";
import TweetContent from './tweetContent'
import { TweetContext } from "../context/tweetContext";
import TweetController from '../controllers/TweetController';
import { UserContext } from '../context/userContext';
const AddComment = () => {
  const {tweet}=useContext(TweetContext)
  const {register,handleSubmit,formState:{errors}}=useForm()
  const {addTweet}=TweetController()
  const {profileData}=useContext(UserContext)
    return (
        <dialog id="AddComment" className="modal items-start pt-10 max-sm:bg-black bg-[#5b708366]  ">
        <div className="modal-box bg-black w-full p-0">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
          </form>
      
        <div className="hero-content flex-col ">
          
            <form className="card-body p-0 w-[90%] pt-8 min-h-56 ">
            <TweetContent tweet={tweet} newReply={true}/>

            <div className='flex items-start gap-3 mb-8 p-4 pt-0 pl-0'>
              <Avatar tweet={tweet} img={profileData?profileData.profile_picture_url:""}/>
            <textarea  placeholder="Post your reply" rows={3} type="text" className=" w-full text-lg font-extralight  border-none outline-none placeholder:text-base  bg-transparent mt-2" {...register("content_text",{required:"tweet can not be empty"})}  >
              </textarea>
              <p className="mt-1 text-[#e25858]">{errors.name?.message}</p>

            </div>
              <div className="form-control flex-row justify-end">
                <button className="btn items-end btn-primary bg-custom-blue rounded-full hover:bg-custom-blue outline-none min-h-0 h-10 mt-2 w-fit " onClick={handleSubmit((data)=>{ addTweet(data,"comment",tweet);
              document.getElementById("AddComment").close()})}>Reply</button>
      
              </div>
      
            </form>
        </div>
      </div>
      
      </dialog>);
}

export default AddComment

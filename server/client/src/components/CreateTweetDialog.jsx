import { useForm } from "react-hook-form";
import TweetController from "../controllers/TweetController";


const CreateTweet = () => {
  const {register,handleSubmit}=useForm()
  const {addTweet}=TweetController()
  return (
    <dialog id="CreateTweet" className="modal items-start pt-20 max-sm:bg-black bg-[#5b708366]  ">
    <div className="modal-box bg-black w-full p-0">
      <form method="dialog ">
        <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2" onClick={(e)=>{e.preventDefault();document.getElementById("CreateTweet").close()}}>✕</button>
      </form>
  
    <div className="hero-content flex-col ">
      
        <form className="card-body p-0 w-4/5 pt-8 min-h-56 justify-between">
       
        <textarea type="text" placeholder="What is happening?!" rows={3} className=" max-w-full text-lg font-extralight placeholder:text-base placeholder:text-custom-gray border-none outline-none h-full bg-transparent "
         {...register("content_text")}/>
           
          <div className="form-control flex-row justify-end">
            <button className="btn items-end btn-primary bg-custom-blue rounded-full hover:bg-custom-blue outline-none min-h-0 h-10 mt-2 w-fit " onClick={handleSubmit((data)=>{
              addTweet(data,"tweet");
              document.getElementById("CreateTweet").close()
            })} >Post</button>
  
          </div>
  
        </form>
    </div>
  </div>
  
  </dialog>);
  
}

export default CreateTweet

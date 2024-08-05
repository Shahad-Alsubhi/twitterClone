import { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import { UserContext } from "../context/userContext";
import UserController from "../controllers/userController";

const EditProfileDialog = () => {
  const {profileData}=useContext(UserContext)
  const [header,setHeader]=useState("")
  const [avatar,setAvatar]=useState("")
  const [name,setName]=useState("")
  const [bio,setBio]=useState("")
  const {handleUpdateProfile}=UserController()


  useEffect(()=>{
    setHeader(profileData.header_picture_url)
    setAvatar(profileData.profile_picture_url)
    setName(profileData.name)
    setBio(profileData.bio)

  },[profileData])
   
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      console.log(url)
      console.log(file)

      setAvatar(url);
    }
  };
  const handleHeaderChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      console.log(url)
      console.log(file)

      setHeader(url);
    }
  };

    return (
        <dialog id="EditProfile" className="modal items-start pt-20 max-[500px]:pt-12 max-sm:bg-black bg-[#5b708366]  ">
        <div className="modal-box bg-black w-full p-0">
          <form  className="flex flex-row justify-between p-5 pt-0 pb-0 items-center ">
            <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
            <h1 className="text-white font-bold text-lg pl-7 pt-3">
            Edit profile</h1>
          </form>
      

        <div className="hero-content flex-col pt-2">

            <form className="card-body p-0 w-full min-h-56 pt-4 justify-between" >
            <button className=" bg-white rounded-full outline-none min-h-0 h-8 text-black absolute right-3 top-3  w-fit" onClick={(e)=>{e.preventDefault();handleUpdateProfile(name,bio,avatar,header);console.log("save")}}>Save</button>

            {/* header */}
            <div className={` h-full min-h-44 sm:min-h-40 max-h-48  overflow-hidden bg-cover	relative`} style={{ backgroundImage: `url(${header})` }}>
            <label htmlFor="headerPicture" className="absolute left-[49%] top-[40%]">
            <FilterCenterFocusIcon className="cursor-pointer" />
           </label>
              <input type="file" id="headerPicture" className="hidden" onChange={handleHeaderChange}  />
           </div>
           <div className="-mt-16 ml-6 relative w-fit">
           <Avatar style={"w-[6rem] h-full"} img={avatar} />
           <label htmlFor="avatarPicture" className="absolute left-[38%] top-[40%]" >
            <FilterCenterFocusIcon className="cursor-pointer" />
           </label>
           <input id="avatarPicture" type="file" className="hidden"  onChange={handleAvatarChange}  />
           </div>



           {/* name */}
            <input type="text" placeholder="username" value={name} className=" mt-6 max-w-full text-lg font-extralight border-[1px] border-custom-border-color outline-none h-16 p-4 bg-transparent placeholder:text-lg" onChange={(e)=>{setName(e.target.value)}} />
           {/* bio */}
           <textarea   placeholder="Bio" rows={4} type="text" value={bio} onChange={(e)=>{setBio(e.target.value)}} className=" w-full text-lg font-extralight  p-4  mb-14  rounded-none border-[1px] border-custom-border-color outline-none placeholder:text-lg  bg-transparent  mt-5" >
           </textarea>
              
      
            </form>
        </div>
      </div>
      
      </dialog>);
  
}

export default EditProfileDialog

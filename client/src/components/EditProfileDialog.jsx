import { useContext, useState } from "react";
import Avatar from "./Avatar";
import FilterCenterFocusIcon from '@mui/icons-material/FilterCenterFocus';
import { UserContext } from "../context/userContext";
import UserController from "../controllers/userController";

const EditProfileDialog = () => {
  const {profileData}=useContext(UserContext)
  
  const [profile,setProfile]=useState({
    name:profileData.name,
    bio:profileData.bio,
    headerPicture:profileData.header_picture_url,
    profilePicture:profileData.profile_picture_url
  })



  const [headerFile,setHeaderFile]=useState("")
  const [avatarFile,setAvatarFile]=useState("")

  const {handleUpdateProfile}=UserController()

  const handleSubmit=async (e)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append('name',profile.name)
    formData.append('bio',profile.bio)
    formData.append('headerPicture',headerFile)
    formData.append('profilePicture',avatarFile)
    
   await handleUpdateProfile(formData);
   document.getElementById("EditProfile").close()

  }

  const handleChange = (e) => {
    if (e.target.name=="profilePicture" || e.target.name=="headerPicture"){
      const { name } = e.target;
      const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfile((prevData) => ({
        ...prevData,
        [name]: url
      }));
      name=="headerPicture"?setHeaderFile(file):setAvatarFile(file)
      
    }}

     else{
    const { name, value } = e.target;
    console.log(name,value)
    setProfile((prevData) => ({
      ...prevData,
      [name]: value
    }));}
  };
   
    return (
        <dialog id="EditProfile" className="modal items-start pt-20 max-[500px]:pt-12 max-sm:bg-black bg-[#5b708366]  ">
        <div className="modal-box bg-black w-full p-0">
          <form  className="flex flex-row justify-between p-5 pt-0 pb-0 items-center ">
            <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2" onClick={(e)=>{e.preventDefault();document.getElementById("EditProfile").close()}}>✕</button>
            <h1 className="text-white font-bold text-lg pl-7 pt-3">
            Edit profile</h1>
          </form>
      

        <div className="hero-content flex-col pt-2" >

            <form className="card-body p-0 w-full min-h-56 pt-4 justify-between" encType="multipart/form-data"  onSubmit={handleSubmit}>
            <button className=" bg-white rounded-full outline-none min-h-0 h-8 text-black absolute right-3 top-3  w-fit" type="submit"  >Save</button>

            {/* header */}
            <div className={` h-full min-h-44 sm:min-h-40 max-h-48  overflow-hidden bg-cover	relative`} style={{ backgroundImage: `url(${profile.headerPicture})` }}>
            <label htmlFor="headerPicture" className="absolute left-[49%] top-[40%]">
            <FilterCenterFocusIcon className="cursor-pointer" />
           </label>
              <input type="file" id="headerPicture" name="headerPicture" className="hidden" onChange={handleChange} />
           </div>
           {/* avatar */}
           <div className="-mt-16 ml-6 relative w-fit">
           <Avatar style={"w-[6rem] h-full"} img={profile.profilePicture} />
           <label htmlFor="avatarPicture" className="absolute left-[38%] top-[40%]" >
            <FilterCenterFocusIcon className="cursor-pointer" />
           </label>
           <input id="avatarPicture" type="file" name="profilePicture" className="hidden"   onChange={handleChange}  />
           </div>
           {/* name */}
            <input type="text" placeholder="name" name="name" value={profile.name} className=" mt-6 max-w-full text-lg font-extralight border-[1px] border-custom-border-color outline-none h-16 p-4 bg-transparent placeholder:text-lg" onChange={handleChange}  />
           {/* bio */}
           <textarea   placeholder="Bio" rows={4} type="text" name="bio" value={profile.bio} onChange={handleChange}  className=" w-full text-lg font-extralight  p-4  mb-14  rounded-none border-[1px] border-custom-border-color outline-none placeholder:text-lg  bg-transparent  mt-5"  >
           </textarea>
              
      
            </form>
        </div>
      </div>
      
      </dialog>
      );
  
}

export default EditProfileDialog

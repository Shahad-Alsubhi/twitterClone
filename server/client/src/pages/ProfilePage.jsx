import Avatar from "../components/Avatar"
import EditProfileDialog from "../components/EditProfileDialog";
import ProfileNav from "../components/ProfileNav"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import UserController from "../controllers/userController";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";


const ProfilePage = () => {
  console.log("render profile")
  const {profileData}=useContext(UserContext)
  
  const date = new Date(profileData.joined_at);
  const options = { month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  
  return ( 
    <div className="border-custom-border-color  w-full max-w-[41rem] h-screen ">
         <div className="flex flex-row flex-start items-center z-10 h-14 p-4 border-custom-border-color border-[1px]  min-[500px]:static fixed w-full bg-black top-0 ">
          <BottomNavigationAction  sx={{padding:"0",minWidth:"0",maxWidth:"50px"}} icon={<KeyboardBackspaceIcon className="text-white p-0"/>} component={Link}  to={"/home/tweets"} />
            <h1 className="text-xl font-bold ">
              {profileData?profileData.name:""}
            </h1>
           </div>
           <div className="max-h-[38rem] ">
            <div className={`bg-slate-500 h-full min-h-44 sm:min-h-40 max-h-48  overflow-hidden bg-cover	`} style={{ backgroundImage: `url(${profileData.profile_picture_url})` }}>
              </div>
              <div className="absoulte -mt-9 ml-5 w-[4.5rem] h-[4.5rem] sm:w-24 sm:-mt-12 md:w-[6.5rem] md:-mt-14"> 
                <Avatar style={"w-full h-full"} img={profileData.profile_picture_url}/>
              </div>
            <div className="p-4 sm:pt-8 md:pt-14 shrink relative ">
                <button className="border-custom-gray border-[1px] w-28 absolute max-sm:-mt-4 top-0 right-5" onClick={()=>{document.getElementById("EditProfile").showModal()}}>Edit profile</button>
                <h2 className="text-xl font-bold ">  {profileData?profileData.name:""}
                </h2>
                <h3 className="text-custom-gray mb-2 font-extralight text-base">@{profileData?profileData.username:""}
                </h3>
                <p className="mb-2">{profileData?profileData.bio:""}
                </p>
                <h4 className="text-custom-gray mb-3 font-extralight text-base">Joined {formattedDate}</h4>

                <div className="flex flex-row gap-5">
                    <div className="flex flex-row space-x-1 ">
                        <h1 className="font-bold text-sm"> 500</h1>
                        <h2 className="text-custom-gray font-extralight text-sm">Following</h2>
                    </div>
                    <div className="flex flex-row space-x-1 ">
                    <h1 className="font-bold text-sm">233</h1>
                    <h2 className="text-custom-gray font-extralight text-sm">Followers</h2>
                    </div>
                </div>
            </div>
            
        </div>

       <ProfileNav/>
       <EditProfileDialog/>
       
      
    </div>
  )
}

export default ProfilePage

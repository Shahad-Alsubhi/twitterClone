import { createContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';


export const UserContext = createContext(); 
const UserProvider = ({ children }) => {
  const initUser=localStorage.getItem("user")

  const [userToken,setUserToken]=useState(initUser?initUser:"");
  const [profileData,setProfileData]=useState("")
  const [userId,setUserId]=useState("")
     
  useEffect(()=>{
    function getdata(){ 
      if(userToken){

        const decoded= jwtDecode(userToken);
        const {profileData,userId}=decoded
         setProfileData(profileData)
          setUserId(userId)
       } }
  getdata()

  },[userToken])



  return (
    <UserContext.Provider value={{setUserToken,userToken,profileData,userId}}>
        {children}
    </UserContext.Provider>
      
  )

}


export default UserProvider

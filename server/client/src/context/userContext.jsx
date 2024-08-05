import { createContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';


export const UserContext = createContext(); 
const UserProvider = ({ children }) => {
  const initUser=localStorage.getItem("user")
  const [userToken,setUserToken]=useState(initUser?initUser:"");
  const [profileData,setProfileData]=useState("")
   
  useEffect(()=>{
    if(userToken){ 
      const decoded= jwtDecode(userToken);
      const profileData=decoded.profileData
      setProfileData(profileData)
   
     }

  },[userToken])
 


  



  return (
    <UserContext.Provider value={{setUserToken,userToken,profileData,setProfileData}}>
        {children}
    </UserContext.Provider>
      
  )

}


export default UserProvider

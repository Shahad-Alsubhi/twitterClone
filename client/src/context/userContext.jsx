import { createContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';


export const UserContext = createContext(); 
const UserProvider = ({ children }) => {
  const initUser=localStorage.getItem("user")

  const [userToken,setUserToken]=useState(initUser?initUser:"");

  let profileData=getdata()

  // const [userId,setUserId]=useState("")
  // const [likedTweets,setLikedTweets]=useState([])
  // const [update,setUpdate]=useState(false)
  
  function getdata(){ 
    if(userToken){ 
      const decoded= jwtDecode(userToken);
      const {profileData,userId}=decoded
      console.log(profileData,"inside")
      // setUserId(userId)
      return profileData
   
     } }

     
  useEffect(()=>{
    
     getdata()

  },[userToken])

  console.log("render from context")


  return (
    <UserContext.Provider value={{setUserToken,userToken,profileData,}}>
        {children}
    </UserContext.Provider>
      
  )

}


export default UserProvider

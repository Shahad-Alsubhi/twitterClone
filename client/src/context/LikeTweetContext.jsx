import { createContext, useContext, useEffect, useState } from "react";
import TweetController from "../controllers/TweetController";
import { UserContext } from "./userContext";


export const LikedTweetsContext = createContext(); 
const LikedTweetsProvider = ({ children }) => {

  const {getLikedTweets}=TweetController()
  const [likedTweets,setLikedTweets]=useState([])
  const [update,setUpdate]=useState([])
  const {userId}=useContext(UserContext)

  useEffect(()=>{
    async function fetchData(){
      if(userId){
        const likedTweets=await getLikedTweets()
        setLikedTweets(likedTweets)
    }}
    fetchData()
  },[update,userId])

  return (
    <LikedTweetsContext.Provider value={{likedTweets,setUpdate}}>
        {children}
    </LikedTweetsContext.Provider>
      
  )

}


export default LikedTweetsProvider

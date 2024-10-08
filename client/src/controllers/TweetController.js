import { useContext } from "react";
import {UserContext} from "../context/userContext"
import { UpdateTweetContext } from "../context/updateTweets";



const TweetController = () => {
     const {userToken}=useContext(UserContext)
     const {setUpdate}=useContext(UpdateTweetContext)
   
    const getAllTweets=async ()=>{
     const res= await fetch("https://twitterclone-wln9.onrender.com/tweets")
     if (res.ok) {
        const { tweets } = await res.json();
        return tweets;
      }
      
    }

    const getFollowingTweets=async ()=>{
      const res= await fetch("https://twitterclone-wln9.onrender.com/tweets/following-tweets",{
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      if (res.ok) {
         const { tweets } = await res.json(); 
         return tweets;
       }
      
     }

    const getUserTweets=async(userId)=>{
      const res= await fetch(`https://twitterclone-wln9.onrender.com/tweets/${userId}/user-tweets`,{
        headers:{
          "Content-Type": "application/json",
          // Authorization: `Bearer ${userToken}`,
        },
      })
      if (res.ok) {
        const { tweets } = await res.json(); 
        return tweets;
     
      }
    

    }

    const getLikedTweets=async()=>{
      const res= await fetch("https://twitterclone-wln9.onrender.com/tweets/liked-tweets",{
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      if (res.ok) {
        const { tweets } = await res.json(); 
        return tweets;
      }
     

    }

    const addTweet=async(data,type,parent_tweet)=>{
      const {content_text}=data
      const payload = {
        content_text,  
        type,   
        parent_tweet       
      };
    
      await fetch("https://twitterclone-wln9.onrender.com/tweets/create-tweet",{
        method:"post",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body:JSON.stringify(payload)
      })
      setUpdate(update=>!update)
    }
    
    const getTweetComments=async(tweetId)=>{

      const res= await fetch(`https://twitterclone-wln9.onrender.com/tweets/${tweetId}/comments`,{
        headers:{
          "Content-Type": "application/json",
        },
      })
      if (res.ok) {
        const { tweets } = await res.json(); 
        return tweets;
      }
    }

    const likeTweet=async(tweet)=>{
     await fetch(`https://twitterclone-wln9.onrender.com/tweets/${tweet._id}/like`,{
        method:"post",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })

    }

  return {
    getAllTweets,
    getFollowingTweets,
    getUserTweets,
    getLikedTweets,
    addTweet,
    getTweetComments,likeTweet,
    
  }
}

export default TweetController

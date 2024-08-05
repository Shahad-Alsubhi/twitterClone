import { useContext } from "react";
import {UserContext} from "../context/userContext"


const TweetController = () => {
     const {userToken}=useContext(UserContext)
  

    const getAllTweets=async ()=>{
     const res= await fetch("https://twitterclone-wln9.onrender.com/tweets")
     if (res.ok) {
        const { tweets } = await res.json();
        console.log(tweets,"controller")

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

    const getUserTweets=async()=>{
      const res= await fetch("https://twitterclone-wln9.onrender.com/tweets/user-tweets",{
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      if (res.ok) {
        console.log("userr")

        const { tweets } = await res.json(); 
        console.log(tweets)

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
    
     const res= await fetch("https://twitterclone-wln9.onrender.com/tweets/create-tweet",{
        method:"post",
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body:JSON.stringify(payload)
      })
      console.log(await res.json())
     

    }
    
    const getTweetComments=async(tweetId)=>{

      const res= await fetch(`https://twitterclone-wln9.onrender.com/tweets/${tweetId}/comments`,{
        headers:{
          "Content-Type": "application/json",
        },
      })
      if (res.ok) {
        const { tweets } = await res.json(); 
        console.log(tweets)
        return tweets;
      }
    }

    // const addComment=async(data,type,parent_tweet)=>{
    //   const {content_text}=data
    //   const payload = {
    //     content_text,  
    //     type,   
    //     parent_tweet       
    //   };
    
    //  const res= await fetch("http://localhost:5550/tweets/create-tweet",{
    //     method:"post",
    //     headers:{
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${user}`,
    //     },
    //     body:JSON.stringify(payload)
    //   })
   

    // }


  
  
  
  
  
  
  return {
    getAllTweets,
    getFollowingTweets,
    getUserTweets,
    getLikedTweets,
    addTweet,
    getTweetComments
  }
}

export default TweetController

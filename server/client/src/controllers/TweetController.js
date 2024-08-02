import { useContext } from "react";
import {UserContext} from "../context/userContext"


const TweetController = () => {
     const {user}=useContext(UserContext)
  

    const getAllTweets=async ()=>{
     const res= await fetch("http://localhost:5550/tweets")
     if (res.ok) {
        const { tweets } = await res.json();
        console.log(tweets,"controller")

        return tweets;
      }
      else {
        alert("error")
      }
    }

    const getFollowingTweets=async ()=>{
      const res= await fetch("http://localhost:5550/tweets/following-tweets",{
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${user}`,
        },
      })
      if (res.ok) {
         const { tweets } = await res.json(); 
         return tweets;
       }
       else {
         alert("error, login first")
       }
     }
    
  
  
  
  
  
  
  return {
    getAllTweets,
    getFollowingTweets

  }
}

export default TweetController

import { useContext, useEffect } from "react"
import AddComment from "./AddComment"
import InteractionWithTweet from './InteractionWithTweet'
import TweetContent from './tweetContent'
import { LikedTweetsContext } from "../context/LikeTweetContext"



const Tweet = ({style,individual,comment,tweet}) => {
  const {likedTweets}=useContext(LikedTweetsContext)
  
  const liked=likedTweets?likedTweets.some((like)=> like.tweet._id==tweet._id):false
  


  return (
    <div className={` ${style}  flex flex-col w-full p-4 pb-1 max-h-[36rem]  max-w-[41rem] border-b-[1px] border-custom-border-color `}>
        <TweetContent tweet={tweet} style={individual?"border-b-[1px]":""} comment={comment}/>
        <InteractionWithTweet  individual={individual} tweet={tweet} liked={liked}/>
        <AddComment tweet={tweet}/>
    </div>
    
  )
}

export default Tweet

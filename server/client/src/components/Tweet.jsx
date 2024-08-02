import AddComment from "./AddComment"
import InteractionWithTweet from './InteractionWithTweet'
import TweetContent from './tweetContent'



const Tweet = ({img,style,individual,comment,tweet}) => {
  return (
    
    <div className={` ${style}  flex flex-col w-full p-4 pb-1 max-h-[36rem]  max-w-[41rem] border-b-[1px] border-custom-border-color `}>
        <TweetContent img={img} tweet={tweet} style={individual?"border-b-[1px]":""} comment={comment}/>
        <InteractionWithTweet  individual={individual} tweet={tweet}/>
        <AddComment tweet={tweet}/>
    </div>
    
  )
}

export default Tweet

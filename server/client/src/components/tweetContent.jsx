import Avatar from "./Avatar"

import { useNavigate } from "react-router-dom"
import InteractionWithTweet from "./InteractionWithTweet"



const TweetContent = ({newReply,style,reply,tweet}) => {
  
  const contentText = tweet ? tweet.content_text : '';
  const contentImg = tweet ? tweet.content_images_urls : '';
  const navigate = useNavigate();




  return (<div onClick={()=>{navigate('/home/tweets/tweet', { state: { tweet } }); }} className={`flex flex-row w-full ${style} border-custom-border-color pb-1 ${newReply ? "min-h-28" :"min-h-fit" } ${reply?"p-4":"p-0"} `}>
    <div className="flex flex-col items-center">
    <Avatar img={tweet?tweet.created_by.profile_picture_url:""}/>
    {(newReply||reply)&&
    <div className="w-[1px] bg-custom-gray h-full "></div>}
    </div>
    <div className="flex flex-col ml-2 w-full ">

        <div className="flex flex-row gap-x-1">
            <h3 className="text-sm font-bold">{tweet?tweet.created_by.name:""}</h3>
            <h3 className="text-sm text-custom-gray font-normal">@{tweet?tweet.created_by.username:""}</h3>
            <h3 className="text-sm text-custom-gray font-normal">&#x2022; 24h</h3>

        </div>
        <div>
        {contentText && <p className="text-sm mt-2">{contentText}</p>}

        </div>
        <div className={`w-full h-full  max-h-[23rem] overflow-hidden rounded-xl flex justify-center mt-4 border-custom-gray ${newReply ? 'hidden' : 'static' }`}>
      {contentImg&& <img src={contentImg} />}
        </div>

      {reply&&<InteractionWithTweet style={"pl-2"}/>
      
      }
    </div>
    </div>
  )
}

export default TweetContent

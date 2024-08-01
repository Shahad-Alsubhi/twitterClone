import Avatar from "./Avatar"

import { Link } from "react-router-dom"
import InteractionWithTweet from "./InteractionWithTweet"


const TweetContent = ({img,newReply,style,reply}) => {
  return (<div className={`flex flex-row w-full ${style} border-custom-border-color pb-1 ${newReply ? "min-h-28" :"min-h-fit" } ${reply?"p-4":"p-0"} `}>
    <div className="flex flex-col items-center">
    <Avatar/>
    {(newReply||reply)&&
    <div className="w-[1px] bg-custom-gray h-full "></div>}
    </div>
    <Link to={"/home/tweets/tweet"}>
    <div className="flex flex-col ml-2">

        <div className="flex flex-row gap-x-1">
            <h3 className="text-sm font-bold">Lorem ipsum</h3>
            <h3 className="text-sm text-custom-gray font-normal">@Lorem8989</h3>
            <h3 className="text-sm text-custom-gray font-normal">&#x2022; 24h</h3>

        </div>
        <div>
            <p className="text-sm mt-2">Lorem ipsum doliatis provident autem accusamus laborum voluptatum? I obcaecati ipsum placeat!</p>
        </div>
        <div className={`w-full h-full  max-h-[23rem] overflow-hidden rounded-xl  mt-4 border-custom-gray ${newReply ? 'hidden' : 'static' }`}>
       {img && <img className="" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />}
        </div>

      {reply&&<InteractionWithTweet style={"pl-0"}/>}
    </div>
    </Link>
    </div>
  )
}

export default TweetContent

import { BottomNavigationAction } from "@mui/material"
import Tweet from "../components/Tweet"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TweetController from "../controllers/TweetController";



const IndividualTweet = () => {
  const location = useLocation();
  const tweet = location.state?.tweet;
  const [tweets,setTweets]=useState([])
  const {getTweetComments}=TweetController()


  useEffect( ()=>{
    async function fetchData() {
      const tweets=await getTweetComments(tweet._id)
      setTweets(tweets)
    }
    fetchData();
  },[])
  
    return (
    <div className="border-custom-border-color border-[1px] w-full max-w-[41rem] h-screen border-b-0 ">
         <div className="flex flex-row flex-start items-center z-10 h-14 p-4 border-custom-border-color border-[1px] border-b-0  w-full bg-black  ">
          <BottomNavigationAction sx={{padding:"0",minWidth:"0",maxWidth:"50px"}} icon={<KeyboardBackspaceIcon className="text-white p-0"/>} component={Link}  to={"/home/tweets"} />
            <h1 className="text-xl font-bold ">
            Post
            </h1>
           </div>
           {/* main tweet */}
        <Tweet style="border-t-[1px] border-custom-border-color mt-2" individual={true} tweet={tweet} />

        {/* comments */}
       {tweets.map(tweet=>(
          <Tweet tweet={tweet} key={tweet._id}/>
        ))} 
        

      
    </div>
  )
}

export default IndividualTweet

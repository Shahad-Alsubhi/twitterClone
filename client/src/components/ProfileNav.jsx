import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweet from './Tweet';
import { useContext, useEffect, useState } from 'react';
import TweetController from '../controllers/TweetController.js';
import TweetContent from './tweetContent';
import { UserContext } from '../context/userContext.jsx';
import { LikedTweetsContext } from '../context/LikeTweetContext.jsx';
import { useParams } from 'react-router-dom';
import { UpdateTweetContext } from '../context/updateTweets.jsx';


export default function ProfileNav() {
  const {userId}=useParams()
  const [value, setValue] = useState(0);
  const {getUserTweets} =TweetController()
  const [tweets,setTweets]=useState([])
  const {likedTweets}=useContext(LikedTweetsContext)
  const {profileData,userId:Context_userId}=useContext(UserContext)
  const {update}=useContext(UpdateTweetContext)


  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect( ()=>{
    async function fetchData() {
      
      const tweets= await getUserTweets(userId)
      setTweets(tweets)    
    }
    fetchData();

  },[update,profileData,userId])
  
  useEffect(()=>{
    setValue(0)
  },[userId])

  return (
    <Box sx={{ width: '100%', maxWidth:"656px", padding:"0" }}
  >
      <Box sx={{backgroundColor:"black" , minWidth:"0", borderBottom:"solid #252424 1px"}}>

        <Tabs value={value} onChange={handleChange}

                  aria-label="basic tabs example">
          <Tab label="Posts" sx={{fontSize:"15px",textTransform:"capitalize",color:"#71767b", fontWeight:"600",minWidth:"0",maxWidth:"97px", ":focus":{color:"white", fontWeight:"900"}, 
        }} />
          <Tab label="Replise" sx={{fontSize:"15px",textTransform:"capitalize",color:"#71767b", fontWeight:"600",minWidth:"0",maxWidth:"97px", ":focus":{color:"white", fontWeight:"900"}, 
        }} />
        {Context_userId==userId&&
          <Tab label="Likes"  sx={{fontSize:"15px",textTransform:"capitalize",color:"#71767b", fontWeight:"600",minWidth:"0",maxWidth:"97px", ":focus":{color:"white", fontWeight:"900"}, 
        }}/>}
        </Tabs>
      </Box>


        {value==0 && tweets.length>0 && tweets
  .filter(tweet => tweet.type === "tweet")
  .map(tweet => (
    <Tweet key={tweet._id} tweet={tweet} />
  ))
        }
     

      {value==1&& tweets.length>0&&tweets
  .filter(tweet => tweet.type === "comment")
  .map(tweet => (
    <>
    <TweetContent key={tweet.parent_tweet._id} tweet={tweet.parent_tweet} reply={true}/>
    <Tweet key={tweet._id} tweet={tweet} />
    </>
  ))
        }


     {value==2 && likedTweets.length>0 && likedTweets.map(like => (
    <Tweet key={like._id} tweet={like.tweet} />
  ))
        }  



    </Box>
  );
}

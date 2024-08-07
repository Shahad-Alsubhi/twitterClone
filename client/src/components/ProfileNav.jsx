import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweet from './Tweet';
import { useContext, useEffect, useState } from 'react';
import TweetController from '../controllers/TweetController.js';
import TweetContent from './tweetContent';
import { UserContext } from '../context/userContext.jsx';


export default function ProfileNav() {
  console.log("render")
  const [value, setValue] = useState(0);
  const [tweets,setTweets]=useState([])
  const {getUserTweets,getLikedTweets} =TweetController()
  // const {likedTweets}=useContext(UserContext)

  


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect( ()=>{
    async function fetchData() {
      if(value==0||value==1){
     const tweets= await getUserTweets()
      setTweets(tweets)
    }
    else{
    const tweets= await getLikedTweets()
      setTweets(tweets)

    }
    }
    fetchData();

  },[value])

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
          <Tab label="Likes"  sx={{fontSize:"15px",textTransform:"capitalize",color:"#71767b", fontWeight:"600",minWidth:"0",maxWidth:"97px", ":focus":{color:"white", fontWeight:"900"}, 
        }}/>
        </Tabs>
      </Box>


        {value==0&& tweets.length>0&& tweets
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


      {/* {value==2 && tweets.length>0&& tweets.map(tweet => (
    <Tweet key={tweet._id} tweet={tweet.tweet} />
  ))
        } */}



    </Box>
  );
}
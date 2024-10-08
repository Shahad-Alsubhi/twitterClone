import {useContext, useEffect, useState}from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweet from '../components/Tweet';
import Avatar from '../components/Avatar';
import LogoWhite from '../assets/logoWhite.png'
import TweetController from '../controllers/TweetController.js';
import { UserContext } from '../context/userContext.jsx';
import { UpdateTweetContext } from '../context/updateTweets.jsx';



const TweetsContainer = () => {

  const [value, setValue] = useState(0);
  const [tweets,setTweets]=useState([]);
  const {getAllTweets,getFollowingTweets}=TweetController()
  const {profileData,userId}=useContext(UserContext)
  const {update}=useContext(UpdateTweetContext)




  const handleChange = async (event, newValue) => {
    setValue(newValue);
  };
  useEffect( ()=>{
    async function fetchData() {
      const tweets=value==0 ? await getAllTweets():await getFollowingTweets()
      setTweets(tweets)

    }
    fetchData();

  },[value,update])


  return (
    <>
    <div className='flex flex-row justify-center relative pt-4 pb-7 min-[500px]:hidden'>

    <div className='absolute left-4 top-3'><Avatar img={ profileData?profileData.profile_picture_url:""} userId={userId?userId:""}/></div>
    <img src={LogoWhite} alt="" className='w-5 h-5' />
</div>
    <Box sx={{  borderBottom:"solid #252424 1px", maxWidth:"665px" }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Tab label="For you" sx={{fontSize:"15px",textTransform:"capitalize",color:"#71767b", fontWeight:"600",minWidth:"0",maxWidth:"97px", ":focus":{color:"white", fontWeight:"900"}, 
        }}/>
        <Tab label="Following" sx={{fontSize:"15px",textTransform:"capitalize", color:"#71767b",fontWeight:"600",minWidth:"0",maxWidth:"100px",  ":focus":{color:"white", fontWeight:"900"}}} />
      </Tabs>
    </Box>
      {tweets.length !==0 &&
        tweets.map((tweet)=>(
          <Tweet key={tweet._id} tweet={tweet} />
        ))
      }

   
     </>  );  

}

export default TweetsContainer

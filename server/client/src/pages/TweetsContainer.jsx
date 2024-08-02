import {useEffect, useState}from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweet from '../components/Tweet';
import Avatar from '../components/Avatar';
import LogoWhite from '../assets/logoWhite.png'
import TweetController from '../controllers/TweetController';



const TweetsContainer = () => {

  const [value, setValue] = useState(0);
  const [tweets,setTweets]=useState([]);
  const {getAllTweets,getFollowingTweets}=TweetController()
  const handleChange = async (event, newValue) => {
    setValue(newValue);
  };
  useEffect( ()=>{
    async function fetchData() {
      const tweets=value==0 ? await getAllTweets():await getFollowingTweets()
      setTweets(tweets)

    }
    fetchData();

  },[value])



  return (
    <><div className='flex flex-row justify-center relative pt-4 pb-7 min-[500px]:hidden'>
    <div className='absolute left-4'><Avatar/></div>
    <img src={LogoWhite} alt="" className='w-5 h-5' />
</div>
    {/* <div className='border-custom-border-color max-w-[41rem] '> */}
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
        {console.log(tweets)}
      {tweets.length !==0 &&
        tweets.map((tweet)=>(
          <Tweet key={tweet._id} tweet={tweet} />
        ))
      }

   
     </>  );  

}

export default TweetsContainer

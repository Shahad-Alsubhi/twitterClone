import {useState}from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tweet from './Tweet';
import Avatar from './Avatar';
import LogoWhite from '../assets/logoWhite.png'


const TweetsContainer = () => {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <><div className='flex flex-row justify-center relative pt-4 pb-7 min-[500px]:hidden'>
    <div className='absolute left-4'><Avatar/></div>
    <img src={LogoWhite} alt="" className='w-5 h-5' />
</div>
    <div className='border-custom-border-color max-w-[41rem] '>
    <Box sx={{  borderBottom:"solid #252424 1px" }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
        sx={{display:'flex' }}
      >
        <Tab label="For you" sx={{fontSize:"15px",textTransform:"capitalize",color:"#71767b", fontWeight:"600",minWidth:"0",maxWidth:"97px", ":focus":{color:"white", fontWeight:"900"}, 
        }}/>
        <Tab label="Following" sx={{fontSize:"15px",textTransform:"capitalize", color:"#71767b",fontWeight:"600",minWidth:"0",maxWidth:"100px",  ":focus":{color:"white", fontWeight:"900"}}} />
      </Tabs>
    </Box>

   

    <Tweet />
    <Tweet/>
    <Tweet img={true}/>
    <Tweet/>
    <Tweet/>
    <Tweet/>



    </div> </>  );  

}

export default TweetsContainer

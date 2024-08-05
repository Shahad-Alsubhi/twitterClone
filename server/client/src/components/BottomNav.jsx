import useMediaQuery from '@mui/material/useMediaQuery';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import {  useContext, useState } from 'react';
import LogoWhite from '../assets/logoWhite.png'
import Avatar from './Avatar';
import QuillPen from './QuillPen';
import CreateTweet from './CreateTweetDialog'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
// import UserController from '../controllers/userController';
import { SearchContext } from '../context/searchContext';
import { UserContext } from '../context/userContext';


    export default  function BottomNav() {
      const matches = useMediaQuery('(min-width:1200px)');
      const [value, setValue] = useState(0);
      // const {getProfileData}=UserController()
      const {profileData}=useContext(UserContext)
      const {search,setSearch}=useContext(SearchContext)

      // useEffect( ()=>{
      //   async function fetchData() {
      //     const profileData=await getProfileData()
      //     setProfileData(profileData)
      //   }
      //   fetchData();
      
      // },[])
    
      return (

        <Box className="w-full min-w-20 flex flex-col  min-[500px]:w-16  h-[3.2rem] max-[500px]:border-t-[1px] border-custom-border-color fixed bottom-0 min-[500px]:left-0  min-[500px]:static min-[500px]:h-screen " sx={{'@media (min-width:1200px)':{width:"180px"}}} >
           
            <BottomNavigation
            sx={{ justifyContent:"space-around" ,alignItems:"center" ,height:"100%", backgroundColor:"black", borderTop:"custom-border-color 0.15px solid" ,'@media (min-width:1200px)':{width:"176px",alignItems:"start"},padding:"0", overflow:"hidden"}}
            className='min-[500px]:flex min-[500px]:flex-col min-[500px]:min-w-12 min-[500px]:pb-10 '
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
   
            <BottomNavigationAction  sx={{ padding: 0, minWidth:"28px" ,maxWidth:"28px", color:"white" ,'@media (max-width:500px)':{display:"none"} }} icon={ <img src={LogoWhite} alt="" className='w-5 h-5' />}  />
            <BottomNavigationAction label={matches? "Home": undefined} sx={{ padding: 0, minWidth:"28px" ,maxWidth:"28px", color:"white",display:"flex" ,flexDirection:"row", gap:"20px",justifyContent:"flex-start",'& .MuiBottomNavigationAction-label': { fontSize: '1.2rem',opacity: 1 }
                }} icon={<HomeIcon sx={{fontSize:"28px" }} />}  component={Link}  to={"/home/tweets"} onClick={()=>{setSearch(true);console.log(search)}}
                />
            <BottomNavigationAction label={matches?"Search": undefined} sx={{ padding: 0, minWidth:"28px" ,maxWidth:"28px", color:"white",display:"flex" ,flexDirection:"row", gap:"20px" ,justifyContent:"flex-start",'& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' ,opacity: 1}
                }} icon={<SearchIcon sx={{fontSize:"28px"}}/>} component={Link}  to={"/home/search"}     onClick={()=>{setSearch(false);console.log(search)} } />
               
            <BottomNavigationAction label={matches?"Notifications": undefined} sx={{ padding: 0, minWidth:"28px" ,maxWidth:"28px",color:"white",display:"flex" ,flexDirection:"row", gap:"20px" ,justifyContent:"flex-start",'& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' }
                }} showLabel icon={<NotificationsOutlinedIcon sx={{fontSize:"28px"}}/>} component={Link}  to={"/home/notifications"} onClick={()=>{setSearch(true);console.log(search)}} />
            <BottomNavigationAction label={matches?"Messages": undefined} sx={{ padding: 0, minWidth:"28px" ,maxWidth:"28px" ,color:"white",display:"flex" ,flexDirection:"row", gap:"20px" ,justifyContent:"flex-start",'& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' }
                }} showLabel icon={<EmailOutlinedIcon  sx={{fontSize:"28px"}}/>}  />
            <BottomNavigationAction label={matches?"Communities": undefined} sx={{ padding: 0 , minWidth:"28px" ,maxWidth:"28px", color:"white",display:"flex" ,flexDirection:"row", gap:"20px" ,justifyContent:"flex-start",'& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' }
                }} showLabel icon={<PeopleOutlinedIcon sx={{fontSize:"28px"}}/>} />
          </BottomNavigation>
          <div className='flex flex-col justify-between h-full items-center pb-6 mt-10  max-[500px]:hidden -ml-2'>
          <QuillPen />
          <div className='flex flex-row gap-4 items-center'>




          <Link className='flex flex-row gap-3 items-center' to={"/home/profile"}>

          <Avatar img={ profileData.profile_picture_url}/>
          <div className="max-xl:hidden">
          <h1 className='font-bold'>{profileData? profileData.name:""}</h1>
          <h5 className='text-custom-gray'>@{profileData? profileData.username:""}</h5>
          </div>          </Link>

          </div>
          </div>
          <CreateTweet/>
        </Box>

      );
    }
    

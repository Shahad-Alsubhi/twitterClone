import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '../components/Avatar';
import PersonIcon from '@mui/icons-material/Person';


const Notifications = () => {
  return (
    <div className="w-full max-w-[41rem]">
        <h1 className='p-4 font-bold text-xl'>Notifications</h1>
        <div className='flex flex-row gap-4 p-4 border-t-[1px] border-custom-border-color'>
        <FavoriteIcon/>
        <div>
            <div className='flex flex-col gap-2'>
            <Avatar />
            <div className='flex flex-row gap-2 '><h5 >Lorem99</h5> <h5>Liked your reply</h5></div>
            </div>
            <p className='mt-4 text-custom-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, necessitatibus? Exercitationem dignissimos nihil beatae! Quaerat facere maiores </p>
            </div>
        </div>

        <div className='flex flex-row gap-4 p-4 border-t-[1px] border-custom-border-color'>
        <PersonIcon/>
            <div className='flex flex-col gap-2'>
            <Avatar />
            <div className='flex flex-row gap-2 '><h5>Lorem97</h5> <h5>followed you</h5></div>
            </div>
            </div>
            <div className='flex flex-row gap-4 p-4 border-t-[1px] border-custom-border-color'>
        <PersonIcon/>
            <div className='flex flex-col gap-2'>
            <Avatar />
            <div className='flex flex-row gap-2 '><h5>Lorem97</h5> <h5>followed you</h5></div>
            </div>
            </div>
            
      
    </div>
  )
}

export default Notifications

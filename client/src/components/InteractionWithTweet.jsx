import { useContext} from "react";
import { TweetContext } from "../context/tweetContext";
import FavoriteIcon from '@mui/icons-material/Favorite';
import TweetController from "../controllers/TweetController";
import { LikedTweetsContext } from "../context/LikeTweetContext";



const InteractionWithTweet =  ({individual,style,tweet,liked}) => {
  const {setTweet}=useContext(TweetContext)
  const {likeTweet}=TweetController()
  const {setUpdate}=useContext(LikedTweetsContext)

 

  return (
    <div className={`flex flex-row justify-between items-center h-8 p-4  pr-0   ${style} pl-10  `}>
                <div onClick={()=>{setTweet(tweet); document.getElementById("AddComment").showModal()}} className="cursor-pointer">

                <svg viewBox="0 0 512 512"className="w-4 h-4 inline mr-1" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z" fill="#71767b" className="fill-000000"></path></svg><h5 className="inline text-xs text-custom-gray">56k</h5>

                </div>  
                <div className="cursor-pointer">
                <svg viewBox="0 0 48 48" className="w-4 h-4 inline mr-1 " xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#71767b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" className="stroke-010101 "><path d="M39.2 3 45 8.8l-5.7 5.9"></path><path d="M45 8.9H14.6C8.2 8.9 3 14.1 3 20.6v5.1M8.8 45 3 39.2l5.7-5.9"></path><path d="M3 39.1h30.4c6.4 0 11.6-5.2 11.6-11.7v-5.1"></path></g></svg><h5 className="inline text-xs text-custom-gray">56k</h5>
                </div>
                <div className="cursor-pointer" onClick={async ()=>{await likeTweet(tweet);setUpdate((update)=>!update)}}>
                
                {!liked&&<svg viewBox="0 0 32 32"className="w-4 h-4 inline mr-1" xmlns="http://www.w3.org/2000/svg"><path d="M16 28.72a3 3 0 0 1-2.13-.88l-10.3-10.3a8.72 8.72 0 0 1-2.52-6.25 8.06 8.06 0 0 1 8.14-8A8.06 8.06 0 0 1 15 5.68l1 1 .82-.82a8.39 8.39 0 0 1 11-.89 8.25 8.25 0 0 1 .81 12.36l-10.5 10.51a3 3 0 0 1-2.13.88ZM9.15 5.28A6.12 6.12 0 0 0 4.89 7a6 6 0 0 0-1.84 4.33A6.72 6.72 0 0 0 5 16.13l10.3 10.3a1 1 0 0 0 1.42 0l10.51-10.52a6.25 6.25 0 0 0 1.77-4.8 6.18 6.18 0 0 0-2.43-4.55 6.37 6.37 0 0 0-8.37.71L16.71 8.8a1 1 0 0 1-1.42 0l-1.7-1.7a6.28 6.28 0 0 0-4.4-1.82Z" data-name="Layer 54" fill="#71767b" className="fill-101820"></path></svg>}
                {liked&&<FavoriteIcon sx={{fontSize:"18px" ,color:"#C80724", marginRight:"4px"}} />}
                <h5 className="inline text-xs text-custom-gray">56k</h5>
                </div>
                <div className={`flex items-center cursor-pointer ${individual?"hidden":"static"}`}> 
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className=" w-4  mr-1 inline h-4"><path d="M5 12a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1Zm5-10a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Zm10 14a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm-5-8a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z" fill="#71767b" className="fill-6563ff"></path></svg>
                 <h5 className="inline text-xs  text-custom-gray">56k</h5>
                </div>
                <div>
                <svg  viewBox="0 0 100 100" className="w-4 h-4 inline mr-1" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M40.783 12.5h18.434c3.41 0 6.225 0 8.517.19 2.38.198 4.567.622 6.616 1.686a16.666 16.666 0 0 1 7.107 7.108c1.064 2.048 1.488 4.235 1.686 6.616.19 2.291.19 5.106.19 8.517v36.811c0 4.012 0 7.303-.22 9.805-.207 2.358-.664 5.137-2.497 7.149a10.416 10.416 0 0 1-8.874 3.334c-2.704-.307-4.878-2.097-6.587-3.735-1.813-1.738-3.98-4.216-6.622-7.235l-1.572-1.796c-1.81-2.07-2.994-3.416-3.975-4.358-.95-.912-1.4-1.13-1.627-1.21a4.167 4.167 0 0 0-2.718 0c-.227.08-.677.298-1.627 1.21-.981.942-2.165 2.289-3.975 4.358l-1.572 1.796c-2.642 3.02-4.81 5.497-6.622 7.235-1.709 1.638-3.883 3.428-6.587 3.735a10.416 10.416 0 0 1-8.874-3.334c-1.833-2.012-2.29-4.791-2.498-7.149-.22-2.502-.22-5.793-.22-9.805V36.617c0-3.41 0-6.226.19-8.517.198-2.38.623-4.568 1.687-6.616a16.666 16.666 0 0 1 7.107-7.108c2.049-1.064 4.236-1.488 6.616-1.686 2.292-.19 5.107-.19 8.517-.19Zm-7.827 8.495c-1.856.154-2.803.433-3.464.777a8.333 8.333 0 0 0-3.554 3.553c-.343.661-.622 1.608-.776 3.464-.159 1.906-.162 4.373-.162 8.003v36.427c0 4.272.004 7.193.188 9.284.151 1.722.392 2.262.414 2.328a2.083 2.083 0 0 0 1.631.613c.06-.035.598-.283 1.845-1.479 1.515-1.453 3.442-3.648 6.255-6.863l1.55-1.772c1.662-1.9 3.085-3.526 4.36-4.75 1.334-1.281 2.812-2.43 4.68-3.075a12.5 12.5 0 0 1 8.154 0c1.868.645 3.346 1.794 4.68 3.076 1.275 1.223 2.697 2.849 4.36 4.75l1.55 1.77c2.813 3.215 4.74 5.411 6.255 6.864 1.247 1.196 1.785 1.444 1.844 1.479a2.083 2.083 0 0 0 1.632-.613c.022-.066.263-.606.414-2.328.184-2.091.188-5.012.188-9.284V36.792c0-3.63-.003-6.097-.162-8.003-.154-1.856-.433-2.803-.776-3.464a8.333 8.333 0 0 0-3.554-3.553c-.66-.344-1.608-.623-3.464-.777-1.906-.158-4.373-.162-8.002-.162H40.958c-3.629 0-6.096.004-8.002.162Z" fill="#71767b" fillRule="evenodd" className="fill-000000"></path></svg>
                <svg viewBox="0 0 24 24" className="w-4 h-4 inline" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9A3.5 3.5 0 1 0 15 5.5a3.45 3.45 0 0 0 0 .5L8.92 9.29a4 4 0 1 0 0 5.42L15 18a3.45 3.45 0 0 0 0 .49 3.54 3.54 0 1 0 .89-2.31l-6-3.24a3.63 3.63 0 0 0 0-1.9l6-3.24A3.48 3.48 0 0 0 18.5 9Z" data-name="Layer 2" fill="#71767b" className="fill-000000"></path></svg>
                </div>

            </div>
  )
}

export default InteractionWithTweet

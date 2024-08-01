import { createBrowserRouter } from "react-router-dom";
import  WellcomePage  from "./pages/WellcomePage";
import HomePage from "./pages/HomePage";
import TweetsContainer from "./pages/TweetsContainer";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import IndividualTweet from "./pages/IndividualTweet";
import Notifications from "./pages/Notifications";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <WellcomePage />,
  },
  {
    path:"/home",
    element:<HomePage/>,
    children:[
      {
        path:"/home",
        element:<TweetsContainer/>
      },
      {
      path:"/home/tweets",
      element:<TweetsContainer/>,
      },
      {  path:"/home/tweets/tweet",
        element:<IndividualTweet/>
      },
    {
      path:"/home/profile",
      element:<ProfilePage/>
    },
    {
      path:"/home/search",
      element:<SearchPage style={"max-w-[41rem]"}/>
    },
    {
      path:"/home/notifications",
      element:<Notifications/>
    },
  
    
    ]
  },
 
  
]);
export default Router;


import { createContext, useState } from "react";


export const UpdateTweetContext = createContext(); 
const UpdateTweetProvider = ({ children }) => {
  const [update,setUpdate]=useState(false);

  return (
    <UpdateTweetContext.Provider value={{update,setUpdate}}>
        {children}
    </UpdateTweetContext.Provider>
      
  )

}


export default UpdateTweetProvider

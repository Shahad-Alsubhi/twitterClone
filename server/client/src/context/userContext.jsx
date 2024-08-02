import { createContext, useState } from "react";


export const UserContext = createContext(); 
const UserProvider = ({ children }) => {
  const initUser=localStorage.getItem("user")
  const [user,setUser]=useState(initUser?initUser:"");

  return (
    <UserContext.Provider value={{setUser,user}}>
        {children}
    </UserContext.Provider>
      
  )

}


export default UserProvider

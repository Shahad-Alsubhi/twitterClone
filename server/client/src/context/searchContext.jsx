import { createContext, useState } from "react";


export const SearchContext = createContext(); 
const SearchProvider = ({ children }) => {
  const [search,setSearch]=useState(true);

  return (
    <SearchContext.Provider value={{search,setSearch}}>
        {children}
    </SearchContext.Provider>
      
  )

}


export default SearchProvider

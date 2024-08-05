import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import Router from './Router'
import React from 'react'
import UserProvider from './context/userContext'
import TweetProvider from './context/tweetContext'
import SearchProvider from './context/searchContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <TweetProvider>
        <SearchProvider>
  <RouterProvider router={Router}/>
  </SearchProvider>
  </TweetProvider>
  </UserProvider>
</React.StrictMode>,
)

import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import Router from './Router'
import React from 'react'
import UserProvider from './context/userContext'
import TweetProvider from './context/tweetContext'
import SearchProvider from './context/searchContext'
import LikedTweetsProvider from './context/LikeTweetContext'
import UpdateTweetProvider from './context/updateTweets'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <UpdateTweetProvider>
      <TweetProvider>
        <LikedTweetsProvider>
        <SearchProvider>
  <RouterProvider router={Router}/>
  </SearchProvider> 
  </LikedTweetsProvider>
  </TweetProvider>
  </UpdateTweetProvider>
  </UserProvider>
</React.StrictMode>,
)

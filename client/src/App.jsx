import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import Layout from './pages/Layout'
import {useUser} from '@clerk/clerk-react'
import Loading from './components/Loading'
import { Sidebar } from 'lucide-react'
import StoriesBar from './components/StoriesBar'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const {user}=useUser();
  return (
    <>
        <Toaster/>
      <Routes>
        <Route path='/' element={!user?<Login/>:<Layout/>}>
         <Route path='/' element={<Feed/>}/>
         <Route path='/messages/:userId' element={<Messages/>}/>
         <Route path='/connections' element={<Connections/>}/>
         <Route path='/discover' element={<Discover/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/profile/:profileId' element={<Profile/>}/>
         <Route path='create-post' element={<CreatePost/>}/>
        </Route>
      </Routes>
      {/* <Loading/> */}
      {/* <StoriesBar/> */}
    </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Register from './Components/Register'
import Posts from './Components/Posts'
import ParticularPost from './Components/ParticularPost'
import NewPost from './Components/NewPost'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (
    <div className='relative'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Posts/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Posts />} />
        <Route path='/post/:id' element={<ParticularPost />} />
        
        <Route path='/' element={<ProtectedRoute/>} >
          <Route path='/new-post' element={<NewPost />} />
          <Route path='/new-post/:id' element={<NewPost/>} />
        </Route>
      </Routes>
      {/* <Footer className="absolute bottom-0"/> */}
    </div>
  )
}

export default App

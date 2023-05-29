import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Register from './Components/Register'
import Posts from './Components/Posts'
import ParticularPost from './Components/ParticularPost'
import NewPost from './Components/NewPost'

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
        <Route path='/new-post' element={<NewPost/>} />
      </Routes>
      {/* <Footer className="absolute bottom-2"/> */}
    </div>
  )
}

export default App

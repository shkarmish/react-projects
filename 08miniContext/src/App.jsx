import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
   <UserContextProvider>

<Login />
<Profile />

    </UserContextProvider>
  )
}

export default App

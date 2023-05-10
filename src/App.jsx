
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import { isWallectConnected } from './services/blockchain'
import Home from "./views/Home"
import Project from "./views/Project"
const App = () => {
  useEffect(async() =>{
    await isWallectConnected()
    console.log("Blockchain connected")
  }, [])
  return (

   
    <div className="min-h-screen relative">
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </div>
    
    

  )
}

export default App

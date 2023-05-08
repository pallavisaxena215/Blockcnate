import { useEffect } from 'react'
import AddButton from '../components/AddButton'
import CreateProject from '../components/CreateProject'
import UpdateProject from '../components/UpdateProject'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { useGlobalState } from '../store'

const Home = () => {
  
    return (
      <>
        <Hero />
        <Projects/>
        <CreateProject/>
        <AddButton/>
      </>
    )
  }

  export default Home
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetails from '../components/ProjectDetails'
import ProjectTransactions from '../components/ProjectTransactions'
const Project = () => {
 
  return  (
    <>
      <ProjectDetails />
      <ProjectTransactions/>
    </>
  ) 
}

export default Project


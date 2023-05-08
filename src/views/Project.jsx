import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetails from '../components/ProjectDetails'
import ProjectTransactions from '../components/ProjectTransactions'
import UpdateProject from '../components/UpdateProject'
import BackProject from '../components/BackProject'
import DeleteProject from '../components/DeleteProject'
const Project = () => {
 
  return  (
    <>
      <ProjectDetails />
      <ProjectTransactions/>
      <UpdateProject/>
      <DeleteProject/>
      <BackProject/>
    </>
  ) 
}

export default Project


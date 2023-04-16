import Identicons from 'react-identicons'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaEthereum } from 'react-icons/fa'

const Projects = () => {
 
 
  return (
    <div className="flex flex-col px-6 mb-7">
      <div className="flex justify-center items-center flex-wrap">
        {Array(6).fill().map((card, i) => (
          <ProjectCard key={i} />
        ))}
      </div>

    
    </div>
  )
}

const ProjectCard = ({card,id }) => {
 

  return (
    <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
      <Link to={'/projects/' + id}>
        <img
          src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/Open-Graph.jpg"
          alt="project title"
          className="rounded-xl h-64 w-full object-cover"
        />

        <div className="p-4">
          <h5>Donation to Girls</h5>

          <div className="flex flex-col">
            <div className="flex justify-start space-x-2 items-center mb-3">
              <Identicons
                className="rounded-full shadow-md"
                string="0x12...1e54"
                size={15}
              />
              <small className="text-gray-700">
              0x12...1e54
              </small>
              <small className="text-gray-700">
               2 days remaining
              </small>
              
            </div>

            <div className="w-full bg-gray-300 overflow-hidden">
            <div
              className="bg-green-600 text-xs font-medium
            text-green-100 text-center p-0.5 leading-none
            rounded-l-full"
           ></div>
          </div>

          <div
            className="flex justify-between items-center 
        font-bold mt-1 mb-2 text-gray-700"
          >
            {/* <small>{0} ETH Raised</small> */}
            <small className="flex justify-start items-center">
              <FaEthereum />
              <span>{0} ETH</span>
            </small>
          </div>

          <div
            className="flex justify-between items-center flex-wrap
            mt-4 mb-2 text-green-500 font-bold"
          >
            <small>
              Donor info
            </small>
            <div>
              Open
             
            </div>
          </div>
           
          </div>
            
         
        </div>
      </Link>
    </div>
  )
}

export default Projects

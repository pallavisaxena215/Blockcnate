import Identicons from 'react-identicons'
import { FaEthereum } from 'react-icons/fa'


const ProjectDetails = () => {
  

  return (
    <div className="pt-24 mb-5 px-6 flex justify-center">
      <div className="flex justify-center flex-col md:w-2/3">
        <div
          className="flex justify-start items-start
        sm:space-x-4 flex-wrap"
        >
           <img
          src="https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/Open-Graph.jpg"
          alt="project title"
          className="rounded-xl h-64 w-full object-cover"
        />

          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                Project Title
              </h5>
              <small className="text-gray-500">
                2 days left 
              </small>
            </div>

            <div className="flex justify-between items-center w-full pt-1">
              <div className="flex justify-start space-x-2">
                <Identicons
                  className="rounded-full shadow-md"
                  size={15}
                />
                <small  className="text-gray-500 font-bold">Donor wallet address :</small>
                <small className="text-gray-500 ">
                  Ox34...1e58
                </small>
              </div>
              
              
              
              

            <div className="font-bold">
                <small className="text-gray-500">Open</small>
             </div>
             </div>      
            </div>
          </div>
          <p className="text-sm font-light mt-2">Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project, the overall objectives for the project, as well as a project plan that describes the activities the members will undertake.</p>
          <div className="w-full overflow-hidden bg-gray-300 mt-4">
                <div
                  className="bg-green-600 text-xs font-medium
              text-green-100 text-center p-0.5 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full"
                  style={{
                    width:'100%',
                  }}
                ></div>
              </div>
        
              <div className="flex justify-between items-center font-bold mt-2">
                <small>{10} ETH Promised</small>
                <small className="flex justify-start items-center">
                  <FaEthereum />
                  <span>{10} ETH</span>
                </small>
              </div>


              <div className="flex justify-start items-center space-x-2 mt-4">

                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-green-600
              text-white font-medium text-xs leading-tight uppercase
              rounded-full shadow-md hover:bg-green-700"
                  >
                    Back Project
                  </button>
            

                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-orange-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-orange-700"
                       
                      >
                        Payout
                      </button>
                   
                     
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-gray-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-gray-700"
                         
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-red-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-red-700"
                          
                        >
                          Delete
                        </button>
                      
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-gray-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-gray-700"
                      >
                        Project Closed
                      </button>

              </div>

        </div>
      </div>
   
  )
}

export default ProjectDetails
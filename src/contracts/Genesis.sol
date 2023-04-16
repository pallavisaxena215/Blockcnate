//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Genesis {
    //OWNER- ADMIN
    address public owner;
    //NO.OF EXISTING PROJECTS
    uint public projectCount;
    // BALANCE OF SMART CONTRACT
    uint public balance;


    //DETAIL OF THE PROJECT
    struct projectStruct {
        uint id;
        address owner;
        address[] applicants;
        address winner;
        string title;
        string description;
        string imageURL;
        uint cost;
        uint timestamp;
        uint expiresAt;
        uint backers;
        statusEnum status;
    }

    //ARRAY OF PROJECTS
    projectStruct[] projects;


    //DETAIL OF DONOR
    struct backerStruct {
        address owner;
        uint contribution;
        uint timestamp;
    }

  //DONER TO PROJECT MAPPING
    mapping(address => projectStruct[]) projectsOf;


  //PROJECTS (ID) TO DONERS MAPPING
    mapping(uint => backerStruct[]) backersOf;

 //LIST OF PROJECTS (EXISTS OR NOT)
    mapping(uint => bool) public projectExist;
 
 // STATUS OF PROJECTS
    enum statusEnum {
        OPEN,
        APPROVED,
        DELETED,
        PAIDOUT
    }
 

    modifier ownerOnly(){
        require(msg.sender == owner, "Owner reserved only");
        _;
    }

    event Action (
        uint256 id,
        string actionType,
        address indexed executor,
        uint256 timestamp
    );

    constructor() {
        owner = msg.sender;
       
    }
 // THIS FUNCTION CREATES THE PROJECT 
    function createProject(
        string memory title,
        string memory description,
        string memory imageURL,
        uint cost,
        uint expiresAt
    ) public returns (bool) {
        require(bytes(title).length > 0, "Title cannot be empty");
        require(bytes(description).length > 0, "Description cannot be empty");
        require(bytes(imageURL).length > 0, "ImageURL cannot be empty");
        require(cost > 0 ether, "Cost cannot be zero");

        projectStruct memory project;
        project.id = projectCount;
        project.owner = msg.sender;
        project.title = title;
        project.description = description;
        project.imageURL = imageURL;
        project.cost = cost;
        project.timestamp = block.timestamp;
        project.expiresAt = expiresAt;

        projects.push(project);
        projectExist[projectCount] = true;
        projectsOf[msg.sender].push(project);
        

        emit Action (
            projectCount++,
            "PROJECT CREATED",
            msg.sender,
            block.timestamp
        );
        return true;
    }


// ADMIN ONLY - UPDATE PROJECT DETAILS
   
// ADMIN ONLY - DELETE PROJECT DETAILS
    function deleteProject(uint id) public returns (bool) {
        require(projects[id].status == statusEnum.OPEN, "Project no longer opened");
        require(msg.sender == owner, "Unauthorized Entity");

        projects[id].status = statusEnum.DELETED;
        //REFUND NEED TO BE ADDED

        emit Action (
            id,
            "PROJECT DELETED",
            msg.sender,
            block.timestamp
        );

        return true;
    }
 function selectWinner(address[] memory _applicants) private returns (address)
 {
    //Add random number oracle: https://docs.chain.link/vrf/v2/introduction
    uint rand = 0;
    return _applicants[rand];
 }

     //PAY TO THE APPLICANT
    function performPayout(uint id) internal {
        uint raised = projects[id].cost;
       

        projects[id].status = statusEnum.PAIDOUT;
        projects[id].winner = selectWinner( projects[id].applicants);
        payTo(projects[id].winner, (raised ));
       

        balance -= projects[id].cost;

        emit Action (
            id,
            "PROJECT PAID OUT",
            msg.sender,
            block.timestamp
        );
    }

    //FUNCTION TO TRANSFER THE MONEY TO THE WALLET ADDRESS
    function payTo(address to, uint256 amount) internal {
        (bool success, ) = payable(to).call{value: amount}("");
        require(success);
    }

   // <------------------ FRONTEND FUNCTIONAITY FUNCTIONS ----------------------->

   
    // TO FETCH A PARTICULAR PROJECT DETAILS
    function getProject(uint id) public view returns (projectStruct memory) {
        require(projectExist[id], "Project not found");

        return projects[id];
    }

    // TO FETCH ALL THE EXISTING PROJECTS
    function getProjects() public view returns (projectStruct[] memory) {
        return projects;
    }
    // TO FETCH THE DONORS OF A PROJECTS
    function getBackers(uint id) public view returns (backerStruct[] memory) {
        return backersOf[id];
    }
   
}
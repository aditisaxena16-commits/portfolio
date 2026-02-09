import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

function Roles() {
  return (
    <div id="Roles" className='pl-10'>
      <HeaderComponent title="Roles and Responsibilities"></HeaderComponent>
      {/* <ul>
        <li>
         <span className="text-orange-600 mr-2">✅</span>
            Develop responsive website using: 
        </li>
        <li>
           Work in agile environment & contribute to sprint planning and estimations.  
        </li>
        <li>
          Help in prioritizing requirements/user stories based on business inputs. 
  
        </li>
        <li>
Collaborate and follow up with cross functional teams to achieve Release initiatives to 
successful conclusion. 
        </li>
        <li>
           Perform pre-release demos to customer. 
 
        </li>
      </ul> */}
     

<div className="relative border-l border-gray-300 pl-10">
     <div className="mb-6">
         <span className="absolute -left-3 top-0 w-6 h-6 bg-orange-600 rounded-full"></span>
      <h3 className="font-bold text-[#ded7d7]">Frontend Developer</h3> <p class="text-[#ded7d7]">Built responsive UI of a live European Website and collaborated with designers</p> </div>
       <div className="mb-6"> 
        <span className="absolute -left-3 top-18 w-6 h-6 bg-orange-600 rounded-full"></span>
        <h3 className="font-bold text-[#ded7d7]">Agile Methodologies</h3> 
       <p class="text-[#ded7d7]">Work in agile environment & contribute to sprint planning and estimations.</p> 
       </div> 
      <div className="mb-6"> 
        <span className="absolute -left-3 top-36 w-6 h-6 bg-orange-600 rounded-full"></span>
        <h3 className="font-bold text-[#ded7d7]">Individual Contributor</h3> 
       <p class="text-[#ded7d7]">Work as an Individual Contributor in Frontend Development and handle end to end process from development to deployment on dev servers</p> 
       </div>
       <div className="mb-6"> 
        <span className="absolute -left-3 top-55 w-6 h-6 bg-orange-600 rounded-full"></span>
        <h3 className="font-bold text-[#ded7d7]">Team Lead</h3> 
       <p class="text-[#ded7d7]">Mentored junior developers and trained them on skills like HTML,CSS,Javascript,Bootstrap.</p> 
       </div>

       <div className="mb-6"> 
        <span className="absolute -left-3 top-72 w-6 h-6 bg-orange-600 rounded-full"></span>
        <h3 className="font-bold text-[#ded7d7]">Release Management & Coordination</h3> 
       <p class="text-[#ded7d7]">Collaborate and follow up with cross functional teams to achieve Release initiatives to 
       successful conclusion.</p> 
       </div>
       
       </div>
    </div>
  )
}

export default Roles

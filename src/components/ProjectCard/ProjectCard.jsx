import React from 'react'

function ProjectCard( {ProName, ProDesc ,ProTitle ,className} ) {
  return (
   <div className={`sticky-card w-full mx-auto max-w-2xl sticky mt-10 ${className}`}>
      <div className='box-border border border-[2px] border-[#2a2e5a] bg-[#181723] rounded-xl'>
        <div className="flex flex-row">
          
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-violet-600">
              </div>
              
              
            <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 via-violet-700 to-transparent">
              </div>
              
              </div>
        <div className='top-content flex items-center px-4 lg:px-8 py-3 lg:py-5'>
          <div className='three-dots flex flex-row'>  
            <div className='red-dot h-2 w-2 lg:h-3 lg:w-3 bg-red-400 rounded-full mr-1'></div>
            <div className='red-dot h-2 w-2 lg:h-3 lg:w-3 bg-orange-400 rounded-full mr-1'></div>
            <div className='red-dot h-2 w-2 lg:h-3 lg:w-3 bg-green-400 rounded-full'></div>
          </div>
         <p className='project-name text-center mx-auto text-white'>{ProTitle}</p>
      </div>

      <div className='bottom-content border-t-[2px] border-indigo-900 px-4 lg:px-8 py-3 lg:py-5'>
        <code className='font-mono text-xs md:text-sm lg:text-base'>
              <div class="blink">
                <span class="mr-2 text-pink-500">const</span>
                <span class="mr-2 text-white">project</span>
                <span class="mr-2 text-pink-500">=</span>
                <span class="text-gray-400"> {`{`} </span>
                </div>
                <div>
                  <span class="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span class="text-gray-400">'</span>
                  <span class="text-amber-300">{ProName}</span>
                  <span class="text-gray-400">',</span>
                  </div>
                  <div class="ml-4 lg:ml-8 mr-2"><span class="text-white">Description:</span>
                  <span class="text-cyan-400"> {ProDesc}</span>
                  <span class="text-gray-400">,</span>
                  </div>
                  <span class="text-gray-400"> {`}`} </span>
        </code>
      </div>
     </div>
    </div>
  )
}

export default ProjectCard

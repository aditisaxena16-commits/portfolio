import React from 'react'

function Skillcard({imgsrc , text}) {
  return (
        <div className="skillComponent m-6 border rounded-xl text-white text-lg font-medium transition-all duration-300 bg-[#181723] border-[#2a2e5a] hover:scale-125">
                        <div className="flex -translate-y-[1px] justify-center"><div className="w-3/4"><div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-700 to-transparent"></div></div></div>

                        <div className="h-32 w-[120px] sm:h-20 flex flex-col items-center justify-center pt-[25px] pb-[25px] pl-[20px] pr-[20px]">
                            <img alt="HTML" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" className="h-full w-auto rounded-lg" src={imgsrc}>
                            </img>
                         <span className="text-center">{text}</span>
                        </div>  
                     </div> 
  )
}

export default Skillcard

import React from 'react'
import Cards from '../Cards/Cards'
import HeaderComponent from '../HeaderComponent/HeaderComponent'  
import bookImage from '../../assets/Copilot_20260120_145742.png'

function Education() {
  return (
    <div 
      className="education relative z-50 my-12 lg:my-6">
        {/* <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-700 to-transparent  w-full">
        </div>
        <div className='flex justify-center mt-10'>
            <span className="w-24 h-[2px] bg-[#181723] mt-5"></span>
            <span className='text-[#ded7d7] text-2xl w-fit bg-[#181723] rounded-xl p-2'>Education</span>
            <span className="w-24 h-[2px] bg-[#181723] mt-5"></span>
        </div> */}
        <HeaderComponent title="Education" />
        <div id="Eductaion" className='py-8'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="col-span-1">
                    <img src={bookImage} alt="Education Image" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="col-span-1">
                <Cards startYear="2016" endYear="2020" category="Bachelor Of Technology" university="Shri Ram Murti Smarak College of Engineering & Technology
Bareilly (UP) Affiliated to UPTU Lucknow" />
                <Cards startYear="2011" endYear="2012" category="Higher Secondary School" university="Padmawati Academy, Bareilly, Affiliated to CBSE Board." />
                <Cards startYear="2009" endYear="2010" category="Secondary School" university="Bishop Conrad Sen. Sec. School. Bareilly, Affiliated to
C.B.S.E. Board."/>

                </div>

            </div>

        </div>
          
            
      
    </div>
  )
}

export default Education

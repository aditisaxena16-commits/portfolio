import React from 'react'

function HeaderComponent({title}) {
  return (
    <div>
       <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-700 to-transparent w-full">
        </div>
        <div className='flex justify-center mt-10'>
            <span className="w-24 h-[2px] bg-[#181723] mt-5"></span>
            <span className='text-[#ded7d7] text-2xl w-fit bg-[#181723] rounded-xl p-2'>{title}</span>
            <span className="w-24 h-[2px] bg-[#181723] mt-5"></span>
        </div>
    </div>
  )
}

export default HeaderComponent

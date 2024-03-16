import React from 'react'
import kp from '../assets/images/kp.jpeg'

const Sidebar = () => {
  return (
    <>
    <div className='bg-pink-500 min-h-screen p-3 text-white'>
      <div className='flex justify-center mt-2'>
      <img src={kp} alt='kp' className='w-36 h-36 rounded-full'/>
      </div>
      <p className='font-semibold text-left mt-3 text-2xl'>Contact</p>
      <hr className='bg-white mb-2'/>
      <div className='flex item-center gap-1 mb-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 
        1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25
        2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 
        0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 
        2.25 0 0 1 1.183 1.98V19.5Z" />
      </svg>
      <p>kattikark1999@gmail.com</p>
     </div>
     <div className='flex item-center gap-1 mb-2'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
     </svg>
    <p>+916363037141</p>
     </div>
     <div className='flex item-center gap-1 mb-2'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
     </svg>
     <p>Belagavi, Karnataka</p>
     </div>
     <div className='flex item-center gap-1 mb-2'>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
     </svg>
     <p>github.com/KenchappaK</p>
    </div>
    <p className='font-semibold text-left mt-3 text-2xl'>Skills</p>
    <hr className='bg-white mb-2'/>
    <div>
      <div>
        <div className='mb-1 text-base font-medium'> HTML</div>
        <div className='w-full bg-gray-700 h-1.5 rounded mb-2'>
          <div className='bg-pink-300 h-1.5 rounded full w-5/6'></div>
        </div>
      </div>
      <div>
        <div className='mb-1 text-base font-medium'> CSS</div>
        <div className=' w-full bg-gray-700 h-1.5 rounded mb-2'>
          <div className='bg-pink-300 h-1.5 rounded full w-3/6'></div>
        </div>
      </div>
      <div>
        <div className='mb-1 text-base font-medium'> Javascript</div>
        <div className=' w-full bg-gray-700 h-1.5 rounded mb-2'>
          <div className='bg-pink-300 h-1.5 rounded full w-5/6'></div>
        </div>
      </div>
      <div>
        <div className='mb-1 text-base font-medium'> React</div>
        <div className=' w-full bg-gray-700 h-1.5 rounded mb-2'>
          <div className='bg-pink-300 h-1.5 rounded full w-3/4'></div>
        </div>
      </div>
      <div>
        <div className='mb-1 text-base font-medium'> Redux</div>
        <div className='w-full bg-gray-700 h-1.5 rounded mb-2'>
          <div className='bg-pink-300 h-1.5 rounded full w-2/4'></div>
        </div>
      </div>
    </div>
  
    <p className='font-semibold text-left mt-3 text-2xl'> Achievements</p>
    <hr className='bg-white mb-2'/>
    <div className='flex items-center gap-1'>
    <div className='flex flex-col items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    <p className='text-center text-sm'>Hall of Fame Codezilla </p>
    </div>
    <div className='flex flex-col items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    <p className='text-center text-sm'>5 Star Rating on Fiverr </p>
    </div>
    <div className='flex flex-col items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
    <p className='text-center text-sm'>1st Winner Hackathon 2024  </p>
    </div>
    </div>
    </div>
    </>
  )
}
export default Sidebar

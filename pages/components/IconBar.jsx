import React from 'react'
import Remote from '../../public/assets/remote.png'
import Trophy from '../../public/assets/trophy.png'
import Paint from '../../public/assets/paint.png'
import Mic from '../../public/assets/mic.png'
import Logo from '../../public/assets/logo.png'
import Headphones from '../../public/assets/headphones.png'
import Image from 'next/image'



const IconBar = () => {
  return (
    <div className='p-2 md:p-8'>
     {/* Container */}
     <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8'>
      {/* Grid Item */}
      <div className='w-full h-[50px] bg-[#9147ff] flex justify=between items-center px-4 rounded'>
       <p className='text-2xl font-bold'>Games</p>
       <Image src={Remote} alt='/'/>
      </div>
      {/* Grid Item */}
      <div className='w-full h-[50px] bg-[#9147ff] flex justify=between items-center px-4 rounded'>
       <p className='text-2xl font-bold'>E-Sports</p>
       <Image src={Trophy} alt='/'/>
      </div>
      {/* Grid Item */}
      <div className='w-full h-[50px] bg-[#9147ff] flex justify=between items-center px-4 rounded'>
       <p className='text-2xl font-bold'>Art</p>
       <Image src={Paint} alt='/'/>
      </div>
      {/* Grid Item */}
      <div className='w-full h-[50px] bg-[#9147ff] flex justify=between items-center px-4 rounded'>
       <p className='text-2xl font-bold'>Talk</p>
       <Image src={Mic} alt='/'/>
      </div>
      {/* Grid Item */}
      <div className='w-full h-[50px] bg-[#9147ff] flex justify=between items-center px-4 rounded'>
       <p className='text-2xl font-bold'>Music</p>
       <Image src={Headphones} alt='/'/>
      </div>
      
     </div>
    </div>
  )
}

export default IconBar
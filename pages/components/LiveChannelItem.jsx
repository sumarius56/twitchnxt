import Image from 'next/image'
import React from 'react'

const LiveChannelItem = ({img,title,profile_img,user,game}) => {
  return (
    <div className='p-2'>
      <Image src={img} alt='/' />
      <div className='flex pt-2'>
       <div className='pr-2' >
        <Image src={profile_img} width='60' height='60'  alt='/' className='rounded-full'/>
       </div>
       <div>
        <p className='text-sm font-bold'>{title}</p>
        <p className='text-sm text-gray-500'>{user}</p>
        <p className='text-sm text-gray-500'>{game}</p>
       </div>
      </div>
    </div>
  )
}

export default LiveChannelItem
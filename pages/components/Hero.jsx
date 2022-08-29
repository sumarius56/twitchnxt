import React from 'react'
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <div id='hero' className='p-2 md:p-8'>
     <div className='relative overflow-hidden w-full pt-[56.25%]'>
      <div>
      <ReactPlayer
        className='absolute top-0 left-0 right-0 bottom-0 h-full w-full' 
        url='https://www.youtube.com/watch?v=mDYqT0_9VR4'
        playing={true}
        width='100%'
        height='100%'
      />
      </div>
     </div>
    </div>
  )
}

export default Hero

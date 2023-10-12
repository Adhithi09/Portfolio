import React from 'react'
import Photo from '../assets/Photo.png';

function Hero() {
  
  return (
    <section className='h-[calc(100vh-5rem)] w-full flex items-center justify-center'>
        <div id="particles-js"></div>
        <div className=' h-5/6 md:w-10/12 w-full flex md:flex-row-reverse flex-col'>
            <div className=' md:w-3/5 w-full h-full flex justify-center flex-col md:pr-8 p-4'>
                <h1 className='md:text-3xl text-xl mb-2'>Hello I'm</h1>
                <h1 className='md:text-6xl text-5xl font-medium mb-4 text-violet-500 '>Adhithi Satish Kumar</h1>
                <p className='text-md tracking-wider font-mono'>I am an amateur web developer with a fun and creative side, eager to learn and explore new horizons.</p>
            </div>
            <div className='md:w-2/5 h-full flex justify-center items-center'>
                <img src={Photo} alt='my-pic' width={300} height={300} className='rounded-full w-72' />
            </div>
        </div>
    </section>
  )
}

export default Hero
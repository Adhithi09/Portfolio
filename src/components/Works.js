import React from 'react'
// import AQI from '../assets/AQI.jpg'
import Cloud from '../assets/Cloud.svg'

function Works() {
  return (
        <section id='work' className='w-full flex flex-col md:flex-col lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]'>
        <div className='flex flex-col gap-4 justify-center'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold'>My <span className='text-violet-600'>Works</span></h1>
            <div className='text-white flex flex-wrap gap-8 mt-5'>
                <a href='https://aqi-eight.vercel.app/' rel="noreferrer" target='_blank' className="transition-all  duration-300 ease-in hover:scale-105 border p-4 border-violet-600/80 shadow hover:shadow-violet-600">
                        <div className='flex gap-2 items-center'>

                        <img src={Cloud} alt="AQI" className='w-12 h-12 '/>
                        <h1 className='md:text-xl text-lg font-semibold'>Air Quality Index App</h1>
                        </div>
                        <p className='md:text-sm text-xs font-mono'>App helps you to find the AQI in your current location.</p>
                    
                </a>
                {/* <div className='transition-all duration-300 ease-in hover:scale-105 border p-4 border-violet-600/80 shadow hover:shadow-violet-600'>
                    <h1 className='md:text-xl text-lg font-semibold'>Project 2</h1>
                    <p className='md:text-sm text-xs font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='transition-all duration-300 ease-in hover:scale-105 border p-4 border-violet-600/80 shadow hover:shadow-violet-600'>
                    <h1 className='md:text-xl text-lg font-semibold'>Project 3</h1>
                    <p className='md:text-sm text-xs font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='transition-all duration-300 ease-in hover:scale-105 border p-4 border-violet-600/80 shadow hover:shadow-violet-600'>
                    <h1 className='md:text-xl text-lg font-semibold'>Project 4</h1>
                    <p className='md:text-sm text-xs font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Works
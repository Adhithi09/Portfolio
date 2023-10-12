import React from 'react'

function About() {
  return (
    <section id='about' className='w-full flex flex-col md:flex-col lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]'>
        <div className='flex flex-col gap-4 justify-center'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold'>About <span className='text-violet-600'>Me</span></h1>
            <p className='text-stone-100 font-mono md:text-lg text-md'>I'm a dedicated and hardworking Computer Science student in my 4th year at SRM Institute of Science and Technology, pursuing a B-Tech degree with a specialization in IoT.
 With a strong foundation in programming languages like C, C++, and Python, I thrive on challenges and continuously seek new opportunities for personal and professional growth. 
Living in Chennai, I'm an avid reader, music enthusiast, and a passionate traveller.</p>
        </div>

    </section>
  )
}

export default About
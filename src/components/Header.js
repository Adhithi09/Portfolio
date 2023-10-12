import React from 'react'

function Header() {
  return (
    <header className='mx-auto w-full h-16 p-8 flex items-center md:justify-between justify-center'>
        <div>
            <h1 className='font-sacrack text-3xl md:text-4xl tracking-widest'>Adhithi</h1>
        </div>
        <div>
            <nav className='md:block hidden'>
                <ul className='flex item-center justify-between gap-4 font-medium text-lg tracking-wide '>
                    <li className='hover:text-violet-500/80 hover:animate-pulse'><a href='#about'>About</a></li>
                    <li className='hover:text-violet-500/80 hover:animate-pulse'><a href='#skills'>Skills</a></li>
                    <li className='hover:text-violet-500/80 hover:animate-pulse'><a href='#work'>Work</a></li>
                    <li className='hover:text-violet-500/80 hover:animate-pulse'><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
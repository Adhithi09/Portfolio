import React from 'react'

function Footer() {
  return (
    <footer className="flex md:flex-row flex-col justify-between items-center p-4 border-t border-violet-600/30">
      <div className='text-sm text-stone-400'>
        Copyright &copy; 2023
      </div>
      <div className='text-sm text-stone-400'>
        Designed and Developed by Addy &#128578;
      </div>
    </footer>
  )
}

export default Footer
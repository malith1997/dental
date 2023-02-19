import React from 'react'
import Logo from '../componets/Logo'
import {motion} from 'framer-motion'

export default function NavBar() {
  return (
    <motion.div
    initial={{y:-100}}
    animate={{y:0}}
    transition={{
        delay:1.6,
        type:"spring",
        stiffness: 140
    }}
    className='flex justify-between items-center max-w-screen-lg mx-auto pt-8 z-10 relative text-black'>
        <Logo />

        <svg className='w-8 h-8' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
        </svg>
      
    </motion.div>
  )
}

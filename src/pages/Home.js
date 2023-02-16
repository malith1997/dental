import React from 'react'
import Nav from '../componets/Nav'
import Topic from '../componets/HeroTopic'
import Hero from '../componets/Hero'
import Bganimation from '../componets/Bganimation'

export default function Home() {
  return (
    <div className='h-screen overflow-hidden relative'>
      


      <React.Fragment>
      
      
      <Bganimation />
      <Nav />
      <Hero />
      <Topic />
   
    
      
     
      
    </React.Fragment>
    </div>
  )
}

import React from 'react'
import Hero from './ui/main/hero'
import Main_Comment from './ui/main/main_comment'
import Main_Project from './ui/main/main_project'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-start w-full min-h-screen overflow-x-hidden'>
      <Hero />
      <Main_Comment />
      <Main_Project />
    </div>
  )
}

export default Home
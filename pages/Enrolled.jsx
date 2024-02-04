import React from 'react'
import Navbar from '../src/Components/Navbar';
const Projects = () => {
  return (
    <div className='h-[90vh]'>
      <Navbar />
      <div className='h-[100vh] flex justify-center align-middle'>
        <h1 className='h-min text-center'>No projects enrolled yet</h1>
      </div>
    </div>
  )
}

export default Projects

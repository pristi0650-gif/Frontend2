import React from 'react'

function ProjectChild(props) {
  return (
    <div className='flex min-h-screen items-center justify-center'>

   
    <div className='border border-blue-500 mx-4 p-4 flex-col text-center justify-center items-center gap-8'>
      
      <img src={props.image} className='h-60 sm:mx-50 mx-25' alt={props.name} />
      <h1 className='font-bold text-xl text-blue-700'>{props.name}</h1>
      <desc className='text-blue-900 p-2'>{props.description}</desc> <br />
      <a href={props.url} target='_blank'>
      <button className='bg-blue-900 text-white p-4 font-bold'>{props.buttons}</button> </a>
    </div>
    </div>
  )
}

export default ProjectChild

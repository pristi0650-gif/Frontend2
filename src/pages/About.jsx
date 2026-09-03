import React from 'react'

function About() {
  return (
    <div className=' items-center justify-center bg-sky-50 md:flex-row flex-col-reverse border-b-2 border-blue-400'>
      <div className='flex items-center justify-center'>
        <h1 className='md:text-5xl text-3xl font-bold text-blue-900 mt-40'>ABOUT ME</h1>
      </div>
      <div className='px-1 py-8 max-w-4xl md:ml-80 md:flex-row'> < p className='p-4 justify-center text-justify'>Hello, I am Pristi Shrestha, a passionate full stack developer from Nepal. I enjoy building responsive and user friendly web
        applications.I am a Computer Science student passionate about technology, programming, and problem-solving. . <br /><br /> I’m always looking for opportunities to grow, collaborate, and turn ideas
        into meaningful projects.I love learning new technologies, solving problems and creating modern websites that provide great user experience.
        I am also interested in exploring new technologies and improving my coding skills.   </p></div>
      <div class="box" className='flex md:flex-col flex-col items-center md:ml-85 border border-gray-500 p-4 rounded-sm md:w-200 m-10'>
        <h3 className='md:text-3xl font-bold text-blue-700'>MY FULL STACK KNOWLEDGE AND SKILLS</h3>
        <div className=' p-5'>
          <ul className='grid md:grid-cols-2'>
            <li className='border border-blue-200 bg-blue-800 text-white p-2 m-2 rounded-sm'>HTML,CSS AND JAVASCRIPT</li>
            <li className='border border-blue-200 bg-blue-800 text-white p-2 m-2 rounded-sm'>USER INTERFACE </li>
            <li className=' border border-blue-200 bg-blue-800 text-white p-2 m-2 rounded-sm'> DATABASE </li>
            <li className='border border-blue-200 bg-blue-800 text-white p-2 m-2 rounded-sm'> REACT JS AND TAILSWIND CSS </li>
            <li className='border border-blue-200 bg-blue-800 text-white p-2 m-2 rounded-sm'> MONGODB, NODEJS AND EXPRESS </li>
            <li className='border border-blue-200 bg-blue-800 text-white p-2 m-2 rounded-sm'> GIT AND GITHUB </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default About

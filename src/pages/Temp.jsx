import React from 'react'

function Temp() {
  return (
    <div className='bg-sky-100 flex flex-col min-h-screen md:flex-row flex-col-reverse '>
      <div className='p-3'>
        <p className='text-8xl font-bold italic mt-40 ml-90 pb-5 text-blue-900 underline'>PRISTI SHRESTHA</p>
        <div className='flex'>
        <p className='px-25 py-8 max-w-4xl ml-25'>I am a Computer Science student passionate about technology, programming, and problem-solving. Currently building a strong foundation in software
 development, algorithms, databases, and computer systems while continuously learning and exploring new technologies. I enjoy turning ideas 
 into practical solutions, taking on challenging projects, and developing skills that can make a real impact in the world of technology.Always 
 curious, adaptable, and eager to learn from new experiences and challenges. Working toward becoming a skilled developer and contributing to 
 meaningful, innovative projects in the future.I am an aspiring IT professional with a strong interest in technology, problem-solving, and 
 continuous learning. I am passionate about developing my skills in information technology and staying updated with the latest tools and trends
  in the industry. </p>
        </div>
        <div className='flex md:flex-row gap-4'>
        <a href="/Accounts.pdf" download><button className='bg-blue-700 text-white font-bold p-3 ml-80'>Download CV</button></a>
        <button className='bg-white text-blue-800 font-bold p-3 ml-20'>Hire me</button>
      </div>

      </div>
        <div><img src="/pfp.jpg" alt="" className="h-100 w-80 md:h-50 md:w-50 mt-2 rounded-full" /></div>
    </div>
  )
}

export default Temp

import React from 'react'

function Hero() {
    return (
        <div className='flex min-h-screen md:flex-row flex-col-reverse items-center justify-center max-w-7xl border-b-2 border-blue-400'>

            <div className='p-4'>

                <div className='flex gap-4 flex-col justify-center items-center'>
                    <h1 className='md:text-5xl font-semibold text-blue-900'>PRISTI SHRESTHA</h1>
                    <h3 className='text-gray-500'>Full Stack Developer</h3>
                    <p>I am a full stack developer from Nepal. I design and build highly scalable and responsive web application using Mongodb, Express , React and Nodejs.</p>
                </div>

                <div className='flex md:flex-row gap-4 justify-center p-10'>

                    <a href="/cv.pdf" download>
                        <button className='bg-blue-300 p-4 text-white font-semibold'>Download CV</button>
                    </a>

                    <button className='border border-gray-300 px-16 font-bold'>Hire me</button>
                </div>
            </div>


            <div>
                <img src="/pfp.jpg" alt="" className='md:h-90 md:w-102 h-60 w-64 md:p-4 mt-10 md:mt-0 rounded-full' />
            </div>



        </div>
    )
}

export default Hero
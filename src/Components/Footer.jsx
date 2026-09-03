import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'

function Footer() {
    return (
        <div className='bg-blue-900 text-white flex sm:flex-row flex-col gap-15 p-15 items-center'>
            <div className='flex gap-4 justify-center flex-col items-center'>
                <h1 className='font-semibold uppercase text-xl'>Pristi Shrestha</h1>
                <p className='text-justify leading-8 text-sm sm:max-w-2xl'>I am a Computer Science student passionate about technology, programming, and problem-solving.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-semibold text-center'> Social Connects</h1>
                <div className='flex gap-4 justify-center'>
                    <a href="https://www.facebook.com/" target='_blank'> <FaFacebook /> </a>
                    <a href="https://www.instagram.com/?hl=en" target='_blank'> <FaInstagram /> </a>
                    <a href="https://np.linkedin.com/" target='_blank'>  <FaLinkedin /> </a>
                    <a href="https://www.tiktok.com/en/" target='_blank'> <FaTiktok /> </a>
                </div>
            </div>
            <div>
                <p>@ All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer

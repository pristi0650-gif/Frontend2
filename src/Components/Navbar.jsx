import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import { Navlinks } from '../Constants/Navbar'

function Navbar() {
    const [open, setOpen] = useState(false)
    return (

        <nav className='bg-blue-400 p-10 fixed w-full'>
            <div className='flex justify-between text-white font-bold'>
                <NavLink className="flex gap-4 items-center">
                    <img src="/pfp.jpg" alt="" className="h-10" />
                    <h1 className='text-xl'>Pristi Shrestha</h1>
                </NavLink>

                <button onClick={()=>setOpen(!open)} className='md:hidden font-semibold text-xl border border-white px-2 mr-2'>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>
                <ul className='flex gap-4 md:flex hidden items-center relative right-30'>
                    {
                        Navlinks.map((link,index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>

                        ))

                    }
                </ul>

            </div>

            {
                open && <ul className='absolute top-25 right-1 p-4 mx-auto w-full bg-gray-100 md:hidden'>
                    {
                        Navlinks.map((link,index) => (
                            <li key={index} className='font-semibold py-6 px-8'>
                                <Link onClick={()=> setOpen(false)}  to={link.path}>{link.name}</Link>
                            </li>

                        ))

                    }
                </ul>
            }

        </nav>
    )
}

export default Navbar

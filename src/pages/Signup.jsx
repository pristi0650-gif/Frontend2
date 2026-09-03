import React from 'react'

function Signup() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <form className='flex flex-col gap-2 border border-gray-400 p-18 rounded-sm text-center'>
         <h1 className='font-bold'>SIGN UP</h1>
        <label> Username: </label> <input type="text" placeholder='Enter' className='px-5 py-2 border border-gray-400' /><br />
        <label>Password: </label><input type="password" placeholder='Enter' className='px-5 py-2 border border-gray-400'/>
        <input type="button" value="Login" className='bg-blue-400 text-white p-1 font-bold' />
        <p>If you have an account... <a href="/signup"> Login</a> </p> 
      </form>
    </div>
  )
}

export default Signup

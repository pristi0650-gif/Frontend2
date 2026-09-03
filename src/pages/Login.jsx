import React, { useEffect, useState } from 'react'

function Login() {
 const [ count, setcount] = useState(0);
 useEffect(()=>{
       alert("logged in")
      console.log("log in count, count")
     },[count])
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <form className='flex flex-col gap-5 border border-gray-400 p-22 rounded-sm text-center '>
                <h1 className='font-bold text-2xl text-blue-300'>Welcome Back !</h1>
                <input type="text" placeholder='username' className='px-12 py-2 border border-gray-200' />
                <input type="password" placeholder='password' className='px-7 py-2 border border-gray-200' />
                <button className='bg-blue-400 text-white p-1 font-bold' onClick={ () => setcount(count+1)}>LOG IN</button>
                {/* <input type="button" value="Login" className='bg-blue-400 text-white p-1 font-bold' /> */}
                <p>Don't have an account ? <a href="/signup">Signup</a></p>
            </form>
        </div>
    )
}

export default Login

import React from 'react'

function Contacts() {
  return (
     <>
     <div className='border-b-2 border-blue-400'>
      <div className='flex ml-50'>
    <div  className='flex min-h-screen border border-gray-500 p-4 rounded-sm w-120 h-60 mt-40 '>
      <form className='flex flex-col gap-2 p-18 rounded-sm text-center'>
        <label>Name </label> <input type="text"  className='px-12 py-1 border border-gray-400' required />
        <label>Email</label> <input type="text"  className='px-12 py-1 border border-gray-400'required/>
        <label>Subject</label> <input type="text"  className='px-12 py-1 border border-gray-400' required/>
        <label>Message</label> <textarea name="Message" id="message" className='border border-gray-400 py-8'></textarea>
        <input type="button" value="SEND" className='bg-blue-900 text-white font-bold p-5 '/>
      </form>
    </div>
    <div className='min-h-screen justify-center m-40'>
        <p className='text-blue-900 text-7xl justify-center font-bold'>CONTACT US</p>
        <ul className='m-10 justify-center'>
          <div class="box" className='border border-blue-400 p-3 mb-2 rounded-sm'><li>pristshrestha@gmail.com</li></div>
          <div class="box" className='border border-blue-400 p-3 mb-2 rounded-sm'><li>98746437745</li></div>
          <div class="box" className='border border-blue-400 p-3 mb-2 rounded-sm'><li>New Road, Kathmandu</li></div>
          <div class="box" className='border border-blue-400 p-3 mb-2 rounded-sm'><li>Available for freelancing</li></div>
        </ul>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contacts

import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-auto bg-[#ffffede5] items-center'>
        <div className='pt-20 m-auto flex flex-col justify-center max-w-[600px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-orange-700 inline border-b-4 border-gray-600'>Contact</p>
                <p className='text-gray-600 py-4'>Submit the form below or shoot me an email - mbuthiadenis@gmail.com</p>
            </div>
        </div>
        <form method='POST' 
            action="https://getform.io/f/pbovpqxa" 
            className='flex flex-col max-w-[600px] w-full justify-center m-auto'
        >
            
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button 
                className='text-[#1e4074] border-2 border-gray-600 rounded hover:bg-[#1e4074] hover:text-white font-bold px-4 py-3 my-8 mx-auto flex items-center'
            >
                Let's Collaborate
            </button>
        </form>
    </div>
  )
}

export default Contact

import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#1d1458] flex justify-center items-center p-4'>
      {/* form for inputs */}
        <form method='POST' action="https://getform.io/f/9d070e24-f55f-4d0e-845f-f08f516a3ba5" className='flex flex-col max-w-[600px] w-full'>
        <div className='mt-14'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-red-500  mt-20' >Contact</p>
          <p className='text-emerald-500 mt-4 mb-4'>
           👉 Fill in the form with kind remarks😜or </p>
          <p className='text-emerald-500 mt-3 mb-5'> 👉send an email instead 📧 devarasettychayasirisha@gmail.com</p> 
        </div>
        {/* fields  */}
            <input className=' border-none rounded-md flex flex-col max-w-[500px] w-full bg-[#d1383f] p-2 py-1 ' type="text" placeholder='Name' name='name' />
            <input className=' my-4 p-2 bg-[#d1383f]  rounded-md flex flex-col max-w-[500px] w-full' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#d1383f] p-2 rounded-md flex flex-col max-w-[500px] w-full' name="message" rows="5" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-emerald-500 hover:border-white-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
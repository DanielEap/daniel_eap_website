import React, { useState } from 'react'
import resume from '../assets/Resume F23.pdf'
import resumeNoAddress from '../assets/Resume F23 No Address.pdf'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdDescription} from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && message) {
      fetch("https://getform.io/f/7d0a3849-acd4-4369-bfa6-aaa30987fa6a", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      })
        .then(() => alert("Message sent!"))
        .catch(() => alert("Message failed to send. Please try again later."))
    } else {
      alert("Please fill out all fields.")
    }
  }
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-r from-[#7DC3AF] to-[#069B9D] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Fill out the form or email me at danieliseap@gmail.com</p>
          {/* maybe take out the href */}
          <p className='text-gray-300'>My phone number is <a href="tel:+12154853533">215-485-3533</a></p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        <div>
        <ul className='flex space-x-6 flex-row place-content-center '>
        <ul className='flex space-x-6 flex-row place-content-center'>
            <li className='bg-blue-600 rounded-md transition duration-300 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-lg w-32'>
                <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/eapdaniel/' target="_blank"
                >
                    Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className=' bg-[#333333] rounded-md transition duration-300 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-lg w-32'>
                <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.github.com/DanielEap' target="_blank"
                >
                    Github <FaGithub size={30} />
                </a>
            </li>
            {/* <li className='bg-[#6fc2b0]'>
                <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='/'
                >
                    Email <HiOutlineMail size={30} />
                </a>
            </li> */}
            <li className='bg-[#565f69] rounded-md transition duration-300 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-lg w-32'>
                <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href={resumeNoAddress} target="_blank"
                >
                    Resume <MdDescription size={30} />
                </a>
            </li>
        </ul>
        </ul>
      </div>
      </form> 
      {/* make the div underneath the  form*/}
      
    </div>

  )
}

export default Contact
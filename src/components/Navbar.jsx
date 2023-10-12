import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import logo2 from '../assets/Logo240.png'
import resume from '../assets/Resume F23.pdf'
import resumeNoAddress from '../assets/Resume F23 No Address.pdf'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#576e90] text-gray-300'>
            <div>
                <img src={logo2} alt="logo" style={{ width: '150px', rotate:'-10deg'}} />
            </div>
            {/* menu */}

            <ul className='hidden md:flex'>
                <li>
                    
                    <Link className='text-white group  hover:text-[#c38d93]' to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                 
                </li>
                <li>
                    <Link className='text-white group  hover:text-[#c38d93]' to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                {/* <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li> */}
                <li>
                    <Link className='text-white group   hover:text-[#c38d93]' to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link className='text-white group   hover:text-[#c38d93]' to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div onClick={toggleNav} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu */}

            <ul className={!nav ? 'hidden' : 'transition ease-in-out delay-150 duration-1000 rounded-lg shadow-lg absolute top-0 right-0 w-[50%] bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-4 text-2xl'>
                    <Link onClick={toggleNav} to="home" smooth={true} duration={500}>
                        Home
                    </Link></li>
                <li className='py-4 text-2xl'>
                    <Link onClick={toggleNav} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                {/* <li className='py-6 text-4xl'>Skills</li> */}
                <li className='py-4 text-2xl'>
                    <Link onClick={toggleNav} to="work" smooth={true} duration={500}>
                        Work
                    </Link></li>
                <li className='py-4 text-2xl'>
                    <Link onClick={toggleNav} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

         
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/eapdaniel/' target="_blank"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.github.com/DanielEap' target="_blank"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e27d60]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li> */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href={resumeNoAddress} target="_blank"
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
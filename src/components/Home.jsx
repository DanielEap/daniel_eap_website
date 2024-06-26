import React, { useState }from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import SelfImg from '../assets/Self.png'
import 'animate.css/animate.min.css';
const Home = () => {
    const [isHovered, setIsHovered] = useState(true);

    return (
        <div name='home' className='w-full h-screen bg-gradient-to-r from-[#7DC3AF] to-[#069B9D]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:flex-row lg:items-center'>
                <div className='lg:w-1/2'>
                    <p className={'text-white sm:text-2xl'}>Hi, my name is</p>
                    <h1 className={`text-4xl sm:text-7xl font-bold text-[#E27d60] ${isHovered ? 'animate__animated animate__bounce' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Daniel Eap</h1>
                    <h2 className='text-2xl sm:text-4xl font-bold text-[#e8a87c]'>Software Developer</h2>
                    <p className='text-white py-4 max-w-[700px] sm:text-2xl'>Welcome to my website!</p>
                    <div>
                        {/* <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button> */}
                    </div>
                </div>
                {/* <div className='w-[50%]'>
                    <img src={SelfImg} alt='self' className=''/>
                </div> */}
            </div>
        </div>
    )
}

export default Home
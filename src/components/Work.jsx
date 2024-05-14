import React from 'react'
import DevpostImg from '../assets/Devpost.jpg'
import TerminalImg from '../assets/terminal.jpg'
import MapImg from '../assets/map.jpg'
import SmartWeightsImg from '../assets/SmartWeights.png'
import { TbExternalLink } from 'react-icons/tb'
const Work = () => {
    return (
        <div name='work' className='w-full lg:h-full md:h-screen md:py-12 text-gray-300 bg-gradient-to-r from-[#7DC3AF] to-[#069B9D] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#e27d60]'>Work</p>
                    <p className='py-6'>Check out my work. Some of it is course related and some outside of classes. This section is continuously work in progress as more projects will be added/swapped in. </p>
                </div>
                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* item */}
                    <div style={{ backgroundImage: `url(${SmartWeightsImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div className='text-center'>
                                <span className='text-2xl text-justify font-bold text-white tracking-wider'>
                                    SmartWeights
                                </span>
                            </div>
                            <div className='pt-8 text-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <a href="https://github.com/DanielEap/project-smartweights" target='_blank'>
                                        <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c38d93]'>
                                            Demo
                                            <TbExternalLink className='inline-block ml-2' />
                                        </span>
                                    </a>
                                    <a href="https://github.com/DanielEap/project-smartweights" target='_blank'>
                                        <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c38d93]'>
                                            Code
                                            <TbExternalLink className='inline-block ml-2' />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${DevpostImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div className='text-center'>
                                <span className='text-2xl text-justify font-bold text-white tracking-wider'>
                                    Hackathon Project
                                </span>
                            </div>
                            <div className='pt-8 text-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <a href="https://github.com/xman343/OwlHack2023CB" target='_blank'>
                                        <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c38d93]'>
                                            Demo
                                            <TbExternalLink className='inline-block ml-2' />
                                        </span>
                                    </a>
                                    <a href="https://www.devpost.com/software/colorblindness-image-enhancer" target='_blank'>
                                        <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c38d93]'>
                                            Code
                                            <TbExternalLink className='inline-block ml-2' />
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${TerminalImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div className='text-center'>
                                <span className='text-2xl text-justify font-bold text-white tracking-wider'>
                                    Mock Shell
                                </span>
                            </div>
                            <div className='pt-8 text-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    <a href="https://youtu.be/rY-QF3cH4cs" target='_blank'>
                                        <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c38d93]'>
                                            Demo
                                            <TbExternalLink className='inline-block ml-2' />
                                        </span>
                                    </a>
                                    <a href="https://github.com/DanielEap/MockShell" target='_blank'>
                                        <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c38d93]'>
                                            Code
                                            <TbExternalLink className='inline-block ml-2' />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${MapImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div className='text-center'>
                                <span className='text-2xl text-justify font-bold text-white tracking-wider'>
                                    Vending Machine Web Application
                                </span>
                            </div>
                            <div className='pt-8 text-center'>
                                <div className='flex flex-row justify-center items-center'>
                                    {/* <a href="https://youtu.be/rY-QF3cH4cs" target='_blank'>
                                        <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c38d93]'>
                                            Demo
                                            <TbExternalLink className='inline-block ml-2' />
                                        </span>
                                    </a> */}
                                    <a href="https://github.com/DanielEap/WebApp" target='_blank'>
                                        <span className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#c38d93]'>
                                            Code
                                            <TbExternalLink className='inline-block ml-2' />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full py-12 bg-gradient-to-r from-[#069B9D] to-[#7DC3AF] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#e27d60]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Background Information</p>
            </div>
            <div>
              <p>Born and raised in Pennsylvania, I am currently 21 years old and in my senior year at Temple University, pursuing a bachelor's in computer science.</p>  
            </div>
          </div>
          <br/>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>My Professional Journey</p>
            </div>
            <div>
              <p>
                I originally wasn't a computer science major, but when I made the decision to switch my major around the time of 2021, I immediately enjoyed learning about the field. 
                I have been accelerating through my courses to make sure I still graduate within the standard four years and am on track to do so!
                The summer of 2023, I was fortunate to have landed an internship with the Pennsylavania Department of Treasury as an intern.
                I learned a lot of skills at my time and got to create cool projects that I am proud of, though am not allowed to share due to the nature of the work.
                Being able to observe the work of my colleagues gave me a further appreciation of those who also work in my field and eager to continue to be a part of it.
                </p>  
            </div>
          </div>
          <br/>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Goals</p>
            </div>
            <div>
              <p>
                I am currently looking for a full-time positions in the field. I have a particular interest in software development and full-stack engineering roles.
                Though, I do have other interests in the field such as security and cloud computing. Ultimately, my goal is to continue learning and being able to hone my skills.
                </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
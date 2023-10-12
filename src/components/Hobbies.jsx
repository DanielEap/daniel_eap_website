import React from 'react'
const Hobbies = () => {
    return (
        <div name='about' className='w-full h-full py-12 bg-gradient-to-r from-[#069B9D] to-[#7DC3AF] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e27d60]'>
                    Hobbies
                </p>
                <p className='max-w-[1000px] mx-auto p-4'>
                    Alongside computing, I really want to share my love for music!
                </p>
                <br/>
                <p className='max-w-[1000px] mx-auto p-4'>
                    Music has been a huge part of my life. Particularly, I enjoy jazz and most genres that stem from it like soul, funk, and R&B.
                    I play the piano and would like to share some of my performances with my friends. 
                    However I am not an avid photographer/videographer so these were all sent to me from my friends. Enjoy!
                </p>
                <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/ms2MbZi47cY?si=0F_NwlkWBYago8MI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="100%" height="300" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1637763837%3Fsecret_token%3Ds-ijUSk6Mh5r1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Hobbies
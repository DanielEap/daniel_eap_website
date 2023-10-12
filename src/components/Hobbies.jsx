import React from 'react'
const Hobbies = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-r from-[#069B9D] to-[#7DC3AF] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <h1 className='text-3xl sm:text-5xl'>Hobbies</h1>
                <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/ms2MbZi47cY?si=0F_NwlkWBYago8MI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="100%" height="300" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1637763837%3Fsecret_token%3Ds-ijUSk6Mh5r1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Hobbies
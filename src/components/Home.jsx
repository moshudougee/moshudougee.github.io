import React from 'react';
import Profile from '../assets/removebg-small.png';

const Home = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#ffffede5]'>
        <div className='pt-20 mx-auto flex flex-col justify-center max-w-[1000px] h-full'>
            
            {/* Intro/Banner section */}
            <section>
                <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
                    <div>
                    <h2 className="font-bold text-4xl text-orange-700">Hello, I'm Denis,</h2>
                    <div>
                        <h2 className="font-bold text-4xl mt-1 gradiant-text">Full Stack Developer</h2>
                    </div>
                    <div>
                        <p className="mt-4 text-gray-600">
                        I’m a full-stack developer specializing in building (and occasionally
                        designing) exceptional digital experiences. Currently, I’m focused on
                        building responsive full-stack web applications.
                        </p>
                        <a href="/docs/FULL STACK RESUME.docx" target="_blank" download="My Resume">
                        <button className="px-8 shadow-gray-500 shadow-md py-4 mt-5 bg-gradient-to-t from-cyan-500 rounded-full to-[#1e4074] hover:from-[#1e4074] hover:to-cyan-700">
                        Download resume
                        </button>
                        </a>
                    </div>
                    </div>
                    <div className="">
                    <div className="border border-orange-300 p-2 rounded">
                        <img src={Profile} className="z-10  w-[280px] m-auto sm:w-[600px]" alt='Profile Pic' />
                    </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home

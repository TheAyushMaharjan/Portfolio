import React from 'react'
import heroimage from "../assets/heroimage.avif"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div name="home" className="h-screen bg-gradient-to-b from-black to-gray-800 md:flex-row">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center
         justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-semibold text-white">I'm a Full Stack <span className='text-blue-600'>Developer</span></h2>

          <p className="py-4 text-1xl  text-gray-400">As an enthusiastic designer familiar with <span className='text-blue-600'>React.js</span>,
            <span className='text-[#F05340]'> Laravel</span>, &  <span className='text-white'>Figma</span>
            , I specialize in <br />creating innovative and user-friendly user interfaces. Passionate about fusing <br /> technology and design to deliver exceptional user experiences.</p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 cursor-pointer duration-300">
                <IoIosArrowForward size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={heroimage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
        </div>
      </div>
    </div>
  )
}

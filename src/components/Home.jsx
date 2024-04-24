import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import me from '../assets/me.png';
import me from '../assets/meIllusrate.png';

import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-r from-purple-400 to-blue-800"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-end h-full px-4">

      <div className="flex flex-col justify-center h-full items-center mt-14">
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl h-20 w-20 "
        />

        <h2 className="text-center sm:text-6xl w-full font-extrabold text-transparent mt-5 bg-gradient-to-r from-white to-white hover:from-blue-600 hover:to-pink-600 bg-clip-text text-transparent duration-300 ">
          I'm a  Web Developer
        </h2>
        <p className=" text-center text-white mt-2 py-4 max-w-md hover: scale-120 duration-300">
           I have 1 year of experience in graphics design and web development.
          Currently, I love to work on web application using technologies like            
          React, Tailwind, Ant Design .
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white mt-3 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-400 to-pink-500 font-semibold cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>

    </div>
  </div>
  );
};
export default Home;
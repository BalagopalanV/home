
import React, { useState, useEffect } from 'react';

const Skills = () => {

    const [height, setHeight] = useState('h-screen');
    const [heightEnable,setHeightEnable] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
                setHeightEnable(true)
                setHeight('h-70vh');
            } else {
                setHeightEnable(false)
                setHeight('h-screen');
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div name='skills' style={{height:heightEnable? '90vh' : ''}} className={`w-full ${height} bg-gradient-to-r from-purple-400 to-blue-800 text-white`}>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl text-center'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-white hover:text-slate-400 rounded duration-500'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-white hover:text-slate-400 rounded duration-500'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-white hover:text-slate-400 rounded duration-500'>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-white hover:text-slate-400 rounded duration-500'>
                  <p className='my-4'>REACT</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;
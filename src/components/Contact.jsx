// import React from 'react's
import {
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import React, { useState, useEffect } from 'react';
const Contact = () => {

  const [height, setHeight] = useState('h-screen');
  const [heightEnable,setHeightEnable] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
              setHeightEnable(true)
                setHeight('h-60vh');
            } else {
                setHeight('h-screen');
              setHeightEnable(false)

            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div name='contact' style={{height:heightEnable? '70vh' : ''}} className={`w-full ${height} bg-gradient-to-r from-purple-400 to-blue-800 text-white flex justify-center items-center p-4`}>
    {/* <div name='contact' className='w-full   h-screen bg-gradient-to-r from-purple-400 to-blue-800 text-white flex justify-center items-center p-4'> */}
      <div className='flex flex-col max-w-[600px] w-full '>
        <div className='pb-8 flex flex-col justify-center w-full h-full  items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
        </div>
        <div className=' mt-10 flex flex flex-row justify-around'>
          <div>
            <a
              className='flex flex-row-reverse items-center text-gray-300'
              href='https://www.linkedin.com/in/balagopalan-v-3a576821b/'
            >
              Linkedin <FaLinkedin size={30} className='pr-1' />
            </a>
          </div>
          <div>
            <a
              className='flex flex-row-reverse items-center text-gray-300'
              href='https://www.instagram.com/bwin43/'
            >
              Instagram <FaInstagram size={30} className='pr-1' />
            </a>
          </div>
          <div>
            <a
              className='flex flex-row-reverse items-center text-gray-300'
              href='Gmail:balagopalan4334@gmail.com'
            >
              Email <HiOutlineMail size={30} className='pr-1' />
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
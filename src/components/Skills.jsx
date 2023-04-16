import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';

import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import java from "../assets/java.png"
import sql from "../assets/sql.png"
import Bootstrap from "../assets/Bootstrap (2).png"
import Spring from "../assets/Spring.png"


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1d1458] text-[#e9eee7f1]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full' style={{height: 'fit-content'}}>

      {/* <div className=' max-w-[1000px] mx-auto p-3 flex flex-col justify-center w-full h-full'> */}
        <div className='mt-14 py-4'>
              <p className='inline mt-100 mb-56 text-4xl leading-6 font-bold border-b-4 border-yellow-600 text-red-500 '>Skills</p>
          <p className='py-4  text-emerald-500'>👉Technologies which i have an experience 😉</p>
          
        </div>
        
          <div className='w-full  grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-4 '>
              <div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-[#e9eee7f1]'>HTML</p>
                  </div>
                    <div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5' src={CSS} alt="css icon" />
                  <p className='my-4 text-[#e9eee7f1]'>CSS</p>
              </div><div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5' src={JavaScript} alt="js icon" />
                  <p className='my-4 text-[#e9eee7f1]'>JavaScript</p>
              </div><div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5' src={ReactImg} alt="react icon" />
                  <p className='my-4 text-[#e9eee7f1]'>React</p>
          </div>
          <div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5' src={GitHub} alt="git icon" />
                  <p className='my-4 text-[#e9eee7f1]'>Github</p>
          </div>
          <div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5' src={Tailwind} alt="HTML icon" />
                  <p className='my-4 text-[#e9eee7f1'>Tailwind</p>
          </div>
          <div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5' src={java} alt="java icon" />
                  <p className='my-4 text-[#e9eee7f1'>JAVA</p>
          </div>
          <div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5 my-4' src={sql} alt="sql icon" />
                  <p className='my-4 text-[#e9eee7f1'>SQL</p>
          </div>
          <div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5' src={Bootstrap} alt="bootstrap icon" />
                  <p className=' sql my-4 text-[#e9eee7f1'>Bootstrap</p>
          </div>
           <div className='shadow-md bg-gradient-to-r from-sky-900 to-slate-700 shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto mt-5' src={Spring} alt="spring icon" />
                  <p className='my-4 text-[#e9eee7f1'>Spring</p>
              </div>

          
          </div>
      </div>
    </div>
  );
};

export default Skills;
import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen  bg-[#1d1458] text-red-500'>
      <div className=' max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full'>
        <div className='mt-14 py-4 ' >
          <p>.</p>
          <p>.</p>
          <p className=' text-4xl font-bold inline border-b-4 text-white-300 border-yellow-600'>
            Work
          </p>
          <p className='py-4  text-emerald-500'>👉 Are you excited to see my projects?🙂</p>
           <p>👉Simply hover over the cards below to begin the demo👇 </p>
        </div>

{/* container to display projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* used Gird Item to divide the coloumns */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#49683e] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div  bg-black "
  >
    {/* Hover-effect on image */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-emerald-500 font-bold text-lg"
          >
            Code👩‍💻
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-emerald-500 font-bold text-lg"
          >
            Live📺
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;
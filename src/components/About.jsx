import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1d1458] text-red-500">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-600 text-red-500">
              About
            </p>
          </div>
      
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-emerald-500">
            <p className='font-bold text-4xl'>
              <strong className='text-3xl '>CHAYA Here👋</strong> it's a pleasure to meet you too. Please feel free to browse around and explore.
            </p>
           
          </div>
          <div className='text-neutral-300'>
             <p >
              👉As a frontend developer with 1.6 years of experience, I have developed a strong proficiency in creating exceptional user experiences on the web.
              I specialize in using modern frontend technologies such as HTML, CSS, and JavaScript, as well as various frontend frameworks like React, Angular, and Vue.js to build high-quality and scalable applications.
            </p>
            <p className='mt-4'>
              👉In addition to my frontend skills, I am also experienced in backend technologies like Java and SQL.
              I have worked on server-side applications using Java
              and have a good understanding of databases like MySQL and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
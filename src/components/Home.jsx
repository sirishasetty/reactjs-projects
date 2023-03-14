import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
      })
    })
  }
  return (
    <div name="home" className="w-full h-screen bg-[#1d1458]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl sm:text-4xl font-bold text-[#1f7d0c]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#e9eee7f1]">
          CHAYA SIRISHA DEVARASETTY
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#1f7d0c]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#e9eee7f1] py-4 max-w-[700px]">
          As a frontend developer, my main focus is on building exceptional digital experiences that are both visually appealing and highly functional. I specialize in creating responsive web applications using modern frontend technologies like HTML, CSS, and JavaScript,
          as well as various frontend frameworks like React & Angular
          I am also experienced in working with backend technologies like java and  databases like MongoDB and MySQL..
        </p>
        <div>
          <button onClick={onButtonClick} className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600">
            Download Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home
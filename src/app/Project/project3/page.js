"use client";
import React from "react";
import Image from "next/image";
import HTML from "../../../assets/Webicon/html-5.png";
import CSS from "../../../assets/Webicon/css-3.png";
import JavaScript from "../../../assets/Webicon/js.png";
import ReactIcon from "../../../assets/Webicon/react.png";

const Project1 = () => {
  return (
    <div className="md:p-10 p-5 bg-gradient-to-b from-gray-100 to-gray-200 text-blue-950">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8  md:mt-10">
        {/* Left Side - Project Name and Buttons */}
        <div className="md:w-1/2 mb-4 md:mb-0 md:pl-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            Online Food <br /> Restaurant
          </h1>
          <div className="flex flex-col md:space-x-4 md:flex-row">
            <a
              href="https://onlinfood.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 text-center bg-gray-800 text-white border border-gray-800 rounded-md hover:bg-white hover:text-gray-800"
            >
              Visit Project
            </a>
            <a
              href="https://github.com/ManMohanSingh031/Onlinfood"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 border text-center border-gray-800 text-gray rounded-md hover:bg-gray-800 hover:text-white md:mt-0 mt-4"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Right Side - Video/Image Box */}
        <div className="md:w-1/2 md:pr-20">
          <div className="border border-gray-300 rounded-md p-2">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/AZfbkYNkP5w?si=sHw9Knj4TZjtFqh_&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="text-center mb-10  md:mt-20">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">
          Let's talk about the project
        </h2>
        <p className="text-base md:text-lg text-justify mx-5 md:mx-72 mb-8">
        • Developed a comprehensive online food delivery application with key
          features such as a dynamic menu-item page, a user-friendly cart system
          for easy addition and removal of items, and a specialized search
          functionality for efficient navigation. To ensure the application’s
          performance and reliability, unit testing was conducted rigorously
          using Jest. 
          <br/>
          • Implemented a shimmer effect for loading states to
          enhance the user experience, leading to improved performance scores
          (75/100) and best practices (100/100) as per Lighthouse metrics. 
          <br/>
          • Overcame challenges in fetching and displaying menu data from the API,
          resulting in improved accessibility (92/100) and SEO scores (82/100).
          This experience demonstrates problem-solving skills and a commitment
          to creating accessible, SEO-friendly web applications. 
          <br/>
          • Optimized the application’s performance and user experience by effectively managing
          state with Redux, leading to a smoother and more responsive user
          interface. This demonstrates a strong understanding of state
          management in complex applications
        </p>

        {/* Technologies Section */}
        <h2 className="text-3xl md:text-5xl font-semibold my-10">
          What Technologies are used?
        </h2>
        <div className="flex justify-center space-x-4">
          <div className="flex flex-col items-center">
            <Image src={HTML} alt="HTML" width={50} height={50} />
            <span className="px-4 py-2 bg-gray-200 rounded-md mt-2">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={CSS} alt="CSS" width={50} height={50} />
            <span className="px-4 py-2 bg-gray-200 rounded-md mt-2">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={JavaScript} alt="JavaScript" width={50} height={50} />
            <span className="px-4 py-2 bg-gray-200 rounded-md mt-2">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image src={ReactIcon} alt="React" width={50} height={50} />
            <span className="px-4 py-2 bg-gray-200 rounded-md mt-2">React</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;

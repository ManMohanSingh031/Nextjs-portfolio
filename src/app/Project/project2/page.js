"use client";
import React from "react";
import Image from "next/image";
import HTML from "../../../assets/Webicon/html-5.png";
import CSS from "../../../assets/Webicon/css-3.png";
import JavaScript from "../../../assets/Webicon/js.png";
import ReactIcon from "../../../assets/Webicon/react.png"; 
import project2 from "../../../assets/fooddonation.png"; 

const Project1 = () => {
  return (
    <div className="md:p-10 p-5 bg-gradient-to-b from-gray-100 to-gray-200 text-blue-950">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8  md:mt-10">
        {/* Left Side - Project Name and Buttons */}
        <div className="md:w-1/2 mb-4 md:mb-0 md:pl-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-10">
          Leftover Food Donation
          </h1>
          <div className="flex flex-col md:space-x-4 md:flex-row">
            <a
              href="https://leftoverfooddonation.netlify.app/" // Replace with actual live link URL
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-3 text-center bg-gray-800 text-white border border-gray-800 rounded-md hover:bg-white hover:text-gray-800"
            >
              Visit Project
            </a>
            <a
              href="https://github.com/ManMohanSingh031/Leftover-Food-Donation" // Replace with actual GitHub URL
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
          <Image
              src={project2} // Replace with actual image URL
              alt="Project 1"
              width={800}
              height={500}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Center Section */}
      <div className="text-center mb-10  md:mt-20">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8">
          Let's talk about the project
        </h2>
        <p className="text-base md:text-lg text-justify mx-5 md:mx-72 mb-8">
        • Developed a real-time application using Next.js, React.js, Tailwind
          CSS, and JavaScript to connect 100+ restaurants with 100+ ashrams for
          leftover food donations, aiming to reduce food waste to 0% and nourish
          those in need.
          <br />
          • Implemented Firebase for authentication and Firestore Cloud to store
          data, coordinating the delivery of surplus food from 100+ restaurants
          to 100+ ashrams, improving food distribution efficiency by 30%.
          <br />• Hosted the application to facilitate broader access, engaging
          100+ volunteers in food collection and delivery efforts, significantly
          expanding the initiative’s reach and impact.
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

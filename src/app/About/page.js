"use client";
import React from "react";
import Skillbar from "./Skillbar";
import Link from "next/link";
import { MdCastForEducation } from "react-icons/md";

const About = () => {
  return (
    <div className="flex flex-col items-start justify-start h-full p-6 md:p-10 bg-gradient-to-b from-gray-100 to-gray-200 text-blue-950">
      <h1 className="text-3xl md:text-4xl font-serif -mt-2 md:-mt-6 mb-10 text-gray-800"><span className="border-b-4 border-red-600">About Me</span></h1>
    

      <h1 className="text-2xl md:text-3xl mb-4 font-bold">
        Hello <span className="text-red-600">Everyone</span>
      </h1>

      <p className="text-left text-base md:text-lg mb-8 leading-relaxed">
        My name is Man Mohan Singh. I am currently pursuing my Bachelor of Technology (B.Tech) degree from the Computer Science Department at the Indian Institute of Information Technology, Nagpur (IIITN). I was born and raised in Raebareli, Uttar Pradesh. It is here that I developed my passion for technology and decided to pursue a career in this field. I am eager to apply the knowledge and skills I have acquired during my studies to solve real-world problems and make a positive impact on society.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Personal Details with Two Columns */}
        <div className="flex flex-col gap-6 mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <p className="font-semibold mb-1">
                <span className="text-gray-700">Birthday:</span> <span className="font-normal">18 Oct 2003</span>
              </p>
              <p className="font-semibold mb-1">
                <span className="text-gray-700">Degree:</span>
                <span className="font-normal"> B.Tech, Computer Science</span>
              </p>
              <p className="font-semibold mb-1">
                <span className="text-gray-700">Email:</span>
                <span className="font-normal"> mohanmohansingh8422@gmail.com</span>
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-semibold mb-1">
                <span className="text-gray-700">City:</span>
                <span className="font-normal"> Rae Bareli, Uttar Pradesh</span>
              </p>
              <p className="font-semibold mb-1">
                <span className="text-gray-700">Phone:</span> <span className="font-normal">+91 8433372612</span>
              </p>
            </div>
          </div>

          <button className="mt-10 w-full md:w-60 h-12 bg-red-600 text-white font-semibold py-3 px-5 rounded-full shadow-lg transform transition-transform duration-400 hover:scale-105 hover:bg-red-700">
          <Link href="/Contact" role="link">Contact Us</Link>
          </button>
        </div>

        {/* Right Column: Skills */}
        <Skillbar />
      </div>


<div className="flex flex-col md:flex-row gap-8 mt-12 relative">

    <div className="flex flex-col gap-4 w-full md:w-1/2 border border-gray-300 bg-white p-6 rounded-lg shadow-sm relative">
        <h2 className="text-xl md:text-2xl mb-4 font-bold text-gray-800">Education</h2>

        
        <div className="absolute left-10 top-24 bottom-10 border-l-2 border-blue-900"></div> 

        
        <div className="relative mb-8">
            <div className="absolute left-2 top-1.5 bg-blue-950 border border-gray-300 w-4 h-4 rounded-full"></div>
            <div className="flex items-center pl-10">
                <MdCastForEducation className="mr-1 md:-mt-6 -mt-32 md:w-6 md:h-6 w-10 h-10 text-blue-950" />
                <p className="font-normal mb-1">
                    2020 – 2024: <span className="font-semibold">Bachelor of Technology (B.Tech) in Computer Science, <br/>Indian Institute of Information Technology, Nagpur (IIITN)</span>
                </p>
            </div>
            <ul className="list-disc list-inside pl-12 text-justify">
                <li>CGPA: 6.5</li>
                <li>Developed core knowledge in programming and web development.</li>
                <li>Engaged in collaborative projects and internships to apply theoretical knowledge in practical scenarios.</li>
            </ul>
        </div>

        <div className="relative mb-8">
            <div className="absolute left-2 top-1.5 bg-blue-950 border border-gray-300 w-4 h-4 rounded-full"></div>
            <div className="flex items-center pl-10">
                <MdCastForEducation className="mr-1 md:-mt-6 -mt-20 md:w-6 md:h-6 w-10 h-10 text-blue-950" />
                <p className="font-normal mb-1">
                    2019 – 2020: <span className="font-semibold">Intermediate, Gopal Saraswati Vidya Mandir Senior Secondary School, Raebareli</span>
                </p>
            </div>
            <ul className="list-disc list-inside pl-12 text-justify">
                <li>Percentage: 61%</li>
                <li>Participated in various academic and extracurricular activities to enhance learning experiences.</li>
            </ul>
        </div>

        <div className="relative mb-8">
            <div className="absolute left-2 top-1.5 bg-blue-950 border border-gray-300 w-4 h-4 rounded-full"></div>
            <div className="flex items-center pl-10">
                <MdCastForEducation className="mr-1 md:-mt-6 -mt-20 md:w-6 md:h-6 w-10 h-10 text-blue-950" />
                <p className="font-normal mb-1">
                    2018: <span className="font-semibold">High School, Gopal Saraswati Vidya Mandir Senior Secondary School, Raebareli</span>
                </p>
            </div>
            <ul className="list-disc list-inside pl-12 text-justify">
                <li>Percentage: 60%</li>
                <li>Achieved foundational skills in science and mathematics through rigorous coursework and practical application.</li>
            </ul>
        </div>
    </div>


{/* Expericence */}
    <div className="flex flex-col gap-4 w-full md:w-1/2 border border-gray-300 bg-white p-6 rounded-lg shadow-sm relative">
        <h2 className="text-xl md:text-2xl mb-4 font-bold text-gray-800">Expericence</h2>

        
        <div className="absolute left-10 top-24 bottom-10 border-l-2 border-blue-900"></div> 

        
        <div className="relative mb-8">
            <div className="absolute left-2 top-1.5 bg-blue-950 border border-gray-300 w-4 h-4 rounded-full"></div>
            <div className="flex items-center pl-10">
                <p className="font-semibold font-clicker mb-1"> BharatTech Pvt. Ltd, Software Engineer Intern<br/> Feb'2024 – July'2024: </p>
            </div>
            <ul className="list-disc list-inside pl-12">
                <li>During my internship at BharatTech, I collaborated with a team of 5 members to enhance a Next.js and React.js project. My responsibilities included fixing bugs, creating reusable components, and adding new components.</li>
                <li>Overall, my internship experience has significantly enhanced my front-end development skills and equipped me to tackle exciting future challenges.</li>
            </ul>
               
        </div>

        <div className="relative mb-8">
            <div className="absolute left-2 top-1.5 bg-blue-950 border border-gray-300 w-4 h-4 rounded-full"></div>
            <div className="flex items-center pl-10">
            <p className="font-semibold font-clicker mb-1"> InternPixel Pvt. Ltd, Software Engineer Intern<br/> Jan'2024 – Feb'2024: </p>
            </div>
            <ul className="list-disc list-inside pl-12">
                <li>Developed responsive web pages using HTML, CSS, and JavaScript. These pages displayed correctly across various devices and included features like navigation menus, forms, and interactive elements.</li>
            </ul>
        </div>

        <div className="relative mb-8">
            <div className="absolute left-2 top-1.5 bg-blue-950 border border-gray-300 w-4 h-4 rounded-full"></div>
            <div className="flex items-center pl-10">
            <p className="font-semibold font-clicker mb-1"> Chegg India Pvt. Ltd, Subject Matter Expert(SME)<br/> Oct'2023 – March'2024: </p>
            </div>
            <ul className="list-disc list-inside pl-12">
                <li>Guided over 200 students in various computer science subjects, leading to a significant improvement in their academic performance.</li>
                <li>Achieved an impressive 82% accuracy rate and demonstrating the effectiveness and precision of the solutions
                provided.</li>
            </ul>
        </div>
    </div>

</div>

</div>
  );
};

export default About;

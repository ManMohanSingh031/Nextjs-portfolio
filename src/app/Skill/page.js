"use client";
import React from 'react';
import { FaLaptopCode, FaFigma, FaCode, FaTools, FaDatabase, FaRobot, FaLinux, FaChartLine } from 'react-icons/fa';
import SkillBox from './Skills';

const Skill = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-b from-gray-100 to-gray-200 text-blue-950">
      <h1 className="text-2xl sm:text-3xl md:text-4xl ml-4 mb-10 sm:ml-6 md:ml-10 font-bold">
        <span className="border-b-4 border-red-600">Skills</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10 text-blue-950">
        <SkillBox Icon={FaLaptopCode} title="Web Development" description="Equipped with a solid foundation in both front-end and back-end web development, ready to create responsive and interactive websites." />
        <SkillBox Icon={FaCode} title="Coding" description="Proficient in C/C++, with a strong understanding of data structures and algorithms. Intermediate knowledge of Java and a beginner in Python." />
        <SkillBox Icon={FaFigma} title="UI/UX Design" description="Experienced in designing intuitive and engaging user interfaces, with a focus on user experience." />
        <SkillBox Icon={FaTools} title="Tools" description="I am familiar with Git, GitHub, and VS Code, and I am currently learning about Linux. Exploring Docker for containerization and CI." />
        <SkillBox Icon={FaDatabase} title="Database" description="I know MySQL and MongoDB, with a strong understanding of relational database management systems and expertise in both SQL and NoSQL." />
        <SkillBox Icon={FaRobot} title="AI/ML" description="An enthusiastic learner in the field of ML and AI, aiming to leverage these technologies to solve complex problems." />
        <SkillBox Icon={FaLinux} title="Linux" description="As a beginner in Linux operating systems, I am enthusiastically learning about command-line operations, shell scripting, and system administration. " />
        <SkillBox Icon={FaChartLine} title="Stock Market" description="I'm learning about chart and candlestick patterns to understand market trends. I'm committed to continuous learning." />
      </div>
    </div>
  );
};

export default Skill;

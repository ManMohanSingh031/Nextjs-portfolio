"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Profile from "../assets/Profile.svg";
import resume from "../assets/pdf/resume.png";

const ResumeModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-4 rounded-lg">
        <button
          className="absolute top-2 right-2 text-red-600 font-bold text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <Image
          src={resume}
          alt="Resume"
          width={500} 
          height={200} 
          className=""
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [text, setText] = useState("");
  const [showResume, setShowResume] = useState(false);
  const roles = ["Frontend Developer", "Software Engineer"];
  let roleIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setText(roles[roleIndex].slice(0, charIndex) + "|");
      charIndex++;
      if (charIndex > roles[roleIndex].length) {
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
      }
    }, 300);
    return () => clearInterval(timer);
  }, []);

  const handleResumeClick = () => {
    setShowResume(true);
  };

  const closeResumeModal = () => {
    setShowResume(false);
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row bg-gradient-to-b from-gray-100 to-gray-200 text-blue-950 px-6 sm:px-12 lg:px-10">
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 px-4">
        <h1 className="font-bold text-2xl sm:text-3xl leading-relaxed">
          Hey! My name is{" "}
          <span className="font-clicker text-red-600">Man Mohan Singh</span>
        </h1>
        <h2 className="font-bold my-5 text-2xl sm:text-3xl leading-relaxed">
          I'm a <span className="text-red-600">{text}</span>
        </h2>
        <p className="mb-4 mt-5 text-base lg:text-lg">
          I am a 4th-year Computer Science and Engineering student at IIIT
          Nagpur, specializing in Frontend Development. Experienced in various
          projects, I am a quick learner, team player, and adept at tackling
          challenges. Motivated by smart work, I excel both independently and
          collaboratively. A creative problem solver, I thrive on exploring new
          technologies and embracing challenges.
        </p>
        <button
          className="text-center mt-10 w-48 sm:w-60 h-10 sm:h-12 bg-red-600 text-zinc-100 font-semibold py-2 sm:py-3 px-4 sm:px-5 rounded-3xl transform transition-transform duration-400 hover:scale-110"
          onClick={handleResumeClick}
        >
          View Resume
        </button>
      </div>

      <div className="hidden w-full lg:w-1/2 lg:flex justify-center items-center mt-10 lg:mt-0">
        <div className="relative">
          <Image
            src={Profile}
            width={300}
            height={400}
            alt="Profile Picture"
            className="mx-auto"
          />
          <div className="absolute -top-6 -left-6 w-20 h-2 bg-red-600"></div>
          <div className="absolute -top-6 -left-6 h-20 w-2 bg-red-600"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-2 bg-red-600"></div>
          <div className="absolute -bottom-6 -right-6 h-20 w-2 bg-red-600"></div>
        </div>
      </div>

      <ResumeModal show={showResume} onClose={closeResumeModal} resumeSrc={resume.src} />
    </div>
  );
};

export default Home;

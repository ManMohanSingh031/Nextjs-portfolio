"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../Logo/page";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex flex-col md:flex-row justify-between items-center text-white bg-red-600 w-full h-auto p-4">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex items-center md:ml-24">
          <Logo />
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <nav className={`flex flex-col md:flex-row md:space-x-8 md:mr-20 items-center text-white text-lg ${isOpen ? "block" : "hidden"} md:block`}>
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/About" className="hover:underline">
          About
        </Link>
        <Link href="/Skill" className="hover:underline">
          Skill
        </Link>
        <Link href="/Project" className="hover:underline">
          Project
        </Link>
        <Link href="/Profile" className="hover:underline">
          Profile
        </Link>
      </nav>
    </header>
  );
};

export default Header;

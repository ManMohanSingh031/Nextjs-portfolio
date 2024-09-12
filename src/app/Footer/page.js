"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import youtubeIcon from "../../assets/FooterSocialIcon/youtube.png";
import instagramIcon from "../../assets/FooterSocialIcon/instagram.png";
import facebookIcon from "../../assets/FooterSocialIcon/facebook.png";
import twitterIcon from "../../assets/FooterSocialIcon/twitter.png";
import Logo from "../Logo/page";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-2">
      <div className="container flex flex-col lg:flex-row justify-between items-center mt-10">
        <div className="relative flex items-center mt-8 mb-16 lg:mb-0 -ml-6 lg:ml-16">
          <Logo />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 lg:mb-0 lg:mr-20">
          <div className="flex flex-col space-y-4">
            <li>
              <Link
                href="/About"
                className="hover:underline ml-2 lg:mr-20"
                role="link"
                tabIndex="0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Skill"
                className="hover:underline ml-2 lg:mr-20"
                role="link"
                tabIndex="0"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                href="Project"
                className="hover:underline ml-2 lg:mr-20"
                role="link"
                tabIndex="0"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href="https://drive.google.com/file/d/1clB6DOe9sRRenxrhlQlpLHa8CRFlv_6r/view?usp=sharing"
                className="hover:underline ml-2 lg:mr-20"
                role="link"
                tabIndex="0"
                download="resume.pdf" // This ensures the file will be downloaded
              >
                Download Resume
              </Link>
            </li>
          </div>
          <div className="flex flex-col space-y-4">
            <li>
              <Link
                href="mailto:manmohansingh8422@gmail.com"
                className="hover:underline ml-2 lg:mr-20 text-white"
                role="link"
                tabIndex="0"
              >
                Email Me
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="hover:underline ml-2 lg:mr-20 text-white"
                role="link"
                tabIndex="0"
              >
                Contact Us
              </Link>
            </li>
          </div>
        </div>

        <div className="mt-3 lg:mt-1 lg:mr-16 lg:leading-relaxed text-center lg:text-left">
          <div className="flex justify-center text-center lg:mr-36 mt-4 space-x-4">
            <Link
              href="https://www.youtube.com/@ManMohanOct18"
              className="rounded-full bg-white p-2"
              role="link"
              tabIndex="0"
            >
              <Image src={youtubeIcon} alt="YouTube Icon" className="h-6 w-6" />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100024843790554"
              className="rounded-full bg-white p-2"
              role="link"
              tabIndex="0"
            >
              <Image
                src={facebookIcon}
                alt="Facebook Icon"
                className="h-6 w-6"
              />
            </Link>

            <Link
              href="https://www.instagram.com/rajput_akash18/"
              className="rounded-full bg-white p-2"
              role="link"
              tabIndex="0"
            >
              <Image
                src={instagramIcon}
                alt="Instagram Icon"
                className="h-6 w-6"
              />
            </Link>

            <Link
              href="https://x.com/rajput_akash18"
              className="rounded-full bg-white p-2"
              role="link"
              tabIndex="0"
            >
              <Image src={twitterIcon} alt="Twitter Icon" className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-red-200 border-spacing-1.5 my-6" />
      <div className="flex flex-wrap mt-2 ml-2 items-center justify-center">
        <p className="text-sm text-gray-300">
          &copy; 2024 My Portfolio. All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

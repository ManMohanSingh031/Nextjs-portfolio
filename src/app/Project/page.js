"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../../assets/comingsoon.jpg";
import image2 from "../../assets/fooddonation.png";
import image3 from "../../assets/online food.png";
import image4 from "../../assets/netflixgpt.png";
import image5 from "../../assets/dashboard.png";
import image6 from "../../assets/portfolio.png";

// Array of image paths
const images = [image1, image2, image3, image4, image5, image6];

// Array of project slugs or identifiers for navigation
const projectSlugs = ["project1", "project2", "project3", "project4", "project5", "project6"];

const Page = () => {
  return (
    <div className="md:p-10 p-5 bg-gradient-to-b from-gray-100 to-gray-200 text-blue-950">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-serif mb-10 text-gray-800">
        <span className="border-b-4 border-red-600">My Projects</span>
      </h1>

      {/* Project Cards */}
      <div className="flex flex-col md:flex-row flex-wrap gap-8 w-full justify-around">
        {images.map((img, index) => (
          <div key={index} className="cursor-pointer mx-auto md:mx-0 md:mb-2">
            <Link href={`/Project/${projectSlugs[index]}`} passHref>
              <div className="relative overflow-hidden rounded-md shadow-md group">
                <Image
                width={450}
                height={300}
                  src={img}
                  alt={`Project Image ${index + 1}`}
                  className="md:w-[440px] w-96 md:h-56 h-40 object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <span className="text-white text-xl font-semibold">View Details</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

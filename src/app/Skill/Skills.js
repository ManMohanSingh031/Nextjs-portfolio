"use client";
import React from 'react';

const SkillBox = ({ Icon, title, description }) => {
    return (
        <div className="w-full sm:w-64 md:w-72 lg:w-80 lg:h-80 h-auto bg-white p-4 sm:p-6 border rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out flex flex-col items-center justify-center group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-600 rounded-full p-2 transition-colors duration-300 ease-in-out flex items-center justify-center group-hover:bg-red-600">
                <Icon className="text-4xl sm:text-4xl md:text-5xl transition-colors duration-300 ease-in-out group-hover:text-white" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-4 sm:mb-6 text-center">{title}</h2>
            <p className="text-sm sm:text-base md:text-base text-justify px-2">{description}</p>
        </div>
    );
};

export default SkillBox;

"use client";
import React from 'react';

// Array of social profiles
const SocialProfiles = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manmohansingh031/' },
  { name: 'GitHub', url: 'https://github.com/ManMohanSingh031' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/Man_Mohan_Singh_01/' },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/man_mohan_1' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/manmohansingh841' },
];

// ProfileCard component
const ProfileCard = ({ profile }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-4 px-6 m-4 h-16 w-full max-w-5xl transform transition-transform duration-300 ease-in-out hover:scale-105 rounded-full shadow-lg">
      <div className="flex justify-center w-full">
        <button
          className="focus:outline-none text-lg md:text-xl lg:text-2xl"
          onClick={() => window.open(profile.url, "_blank")}
        >
          {profile.name}
        </button>
      </div>
    </div>
  );
};

// Page component
const Page = () => (
  <div className="p-10 bg-gradient-to-b from-gray-100 to-gray-200 text-blue-950">
    <h1 className="text-3xl md:text-4xl font-serif mt-0 md:mt-5 mb-10 text-gray-800">
      <span className="border-b-4 border-red-600">Profiles</span>
    </h1>
    <div className="grid grid-cols-1 md:grid-cols gap-6 md:mx-40 font-clicker">
      {SocialProfiles.map(profile => (
        <ProfileCard key={profile.name} profile={profile} />
      ))}
    </div>
  </div>
);

export default Page;

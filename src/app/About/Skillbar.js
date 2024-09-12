import React from "react";

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span>{skill}</span> <span>{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-300 rounded-full">
      <div
        className="h-full text-white bg-red-600 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="flex flex-col w-full md:w-96 mx-4 md:mx-40">
      <SkillBar skill="Nextjs/Reactjs" percentage={75} />
      <SkillBar skill="JavaScript" percentage={78} />
      <SkillBar skill="Tailwind CSS" percentage={85} />
      <SkillBar skill="NodeJs" percentage={70} />
    </div>
  );
};

export default About;

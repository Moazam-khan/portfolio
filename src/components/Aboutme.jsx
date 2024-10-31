// src/components/EducationAndSkills.jsx
import banner1 from "./banner1.png"; 
import React, { useState } from 'react';
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt,FaGit,FaGithub,FaNpm } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const EducationAndSkills = () => {
  const [activeSection, setActiveSection] = useState('education');

  const educationData = [
    { institution: "APSACS RISALPUR CANTT", degree: "Matric | 2015-2017", },
    { institution: "TWPSAC ABBOTTBAD", degree: "Pre-Engneering | 2017-2019", },
    { institution: "UET PESHAWAR ", degree: "Bachelor of Science in Computer Systems Engineering | 2020-2024", },
  ];

  const skillsData = [
    {  icon: <FaJsSquare /> },
    {  icon: <FaReact /> },
    { icon: <FaCss3Alt /> },
    {  icon: <SiTailwindcss /> },
    { icon: <FaHtml5 /> },
    { icon:<FaGit/>},
    {icon:<FaGithub/>},
    {icon:<FaNpm/>},

  ];

  return (
    <div className="min-h-screen flex items-center justify-center mb-39 bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side - Picture */}
          <div className="md:w-1/3  mb-10 md:mb-0  ">
            <img src={banner1} alt="Your Name" className="w-full h-auto  shadow-md" />
          </div>

          {/* Right Side - Description and Links */}
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-2 text-sm">
              I'm a passionate computer systems engineer and frontend developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I'm currently on the lookout for opportunities in frontend development. Throughout my academic journey, I've delved into networking and AI, culminating in a significant project on plant leaf disease classification using CNNs. Besides my technical skills, I also excel in creative tools like Canva and CapCut, enriching my ability to blend innovation with functionality in web development.
            </p>
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setActiveSection('education')}
                className={`px-4 py-2 rounded ${activeSection === 'education' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveSection('skills')}
                className={`px-4 py-2 rounded ${activeSection === 'skills' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Skills
              </button>
              
            </div>

            {/* Conditional Rendering Based on Active Section */}
            {activeSection === 'education' && (
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <ul>
                  {educationData.map((edu, index) => (
                    <li key={index} className="mb-4">
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-gray-600">{edu.degree}</p>
                      
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="p-12 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <ul className="flex space-x-6">
                  {skillsData.map((skill, index) => (
                    <li key={index} className="flex items-center text-gray-600 text-5xl">
                      {skill.icon}
                  
                    </li>
                  ))}
                </ul>
              </div>
            )}
         
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default EducationAndSkills;

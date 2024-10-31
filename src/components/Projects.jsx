// src/components/ProjectsGallery.js
import React from 'react';
import Card from "./Card.png";
import YThastag from "./YThastag.png";
import CC from "./CC.png";
import CTAPI from "./CTAPI.png";
import TODOCI from "./TODOCI.png";
import Capture from "./Capture.png";
import Capture2 from "./Capture2.png";
import Capture3 from "./Capture3.png";
import Capture4 from "./Capture4.png";
import Capture5 from "./Capture5.png";
import Capture9 from "./Capture9.png";
const ProjectsGallery = () => {
  const projects = [
    {
      title: 'Tic Tac Toe',
      imageUrl: Capture,
      githubLink: 'https://github.com/Moazam-khan?tab=repositories',
      onlineLink: 'https://tic-tac-toe66.netlify.app',
    },
    {
      title: 'Desert Safari',
      imageUrl: Capture2,
      githubLink: 'https://github.com/Moazam-khan?tab=repositories',
      onlineLink: 'https://desert-safari0.netlify.app',
    },
    {
      title: 'Currency Converter',
      imageUrl: CC,
      githubLink: 'https://github.com/Moazam-khan?tab=repositories',
      onlineLink: 'https://curr-convt.netlify.app',
    },
    {
      title: 'React Router Dom',
      imageUrl: CTAPI,
      githubLink: 'https://github.com/Moazam-khan?tab=repositories',
      onlineLink: 'https://rrd-react-router-dom.netlify.app',
    },
    {
      title: 'Todo List',
      imageUrl: TODOCI,
      githubLink: 'https://github.com/Moazam-khan?tab=repositories',
      onlineLink: 'https://todolist-contextapi.netlify.app',
    },
    {
      title: 'Paladin',
      imageUrl: Capture3,
      githubLink: 'https://github.com/Moazam-khan?tab=repositories',
      onlineLink: 'https://paladin0.netlify.app',
    },
    {
      title: 'Chatapp',
      imageUrl: Capture4,
      githubLink: 'https://github.com/Moazam-khan?tab=repositories',
      onlineLink: 'https://neardear-chatroom.netlify.app',
    },
    {
      title: 'TechHealth',
      imageUrl: Capture5,
      githubLink: 'https://github.com/Moazam-khan?tab=repositories',
      onlineLink: 'https://tech-care12.netlify.app',
    },
    {
      title: 'Todolist Redux Toolkit',
      imageUrl: Capture9,
      githubLink: 'https://github.com/Moazam-khan?tab=repositories',
      onlineLink: 'https://todolist-with-rtk.netlify.app',
    },
  
    // Add more projects as needed
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="flex flex-wrap justify-center ">
          {projects.map((project, index) => (
            <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
              <div className="relative w-full h-48"> {/* Set a fixed height for the image container */}
                <img
                  className="absolute inset-0 w-full h-full object-cover" // Use object-cover to maintain aspect ratio
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <div className="flex justify-between gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.onlineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
                  >
                    View Online
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default ProjectsGallery;

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
 

  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          
          <div className="flex justify-center mb-4">
            <a href="https://www.linkedin.com/in/moazam-khan-089406319/" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-400">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/Moazam-khan" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-400">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; 2024 Moazam Khan. All rights reserved.</p>
          <p>Computer Systems Engineer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

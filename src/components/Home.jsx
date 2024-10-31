import React from "react";
import banner from "./banner.png"; // Importing the image
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";

const Rightbanner = () => {
  const [text] = useTypewriter({
    words: ["Computer Systems Engineer.", "Fronted Developer.", ""],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section className="mb-28 ">
      <div>
        <h1>Home</h1>
      </div>
      <motion.div className="flex   p-14 min-h-screen flex-col-reverse items-center justify-center ">
        <div className="">
          <div class=" flex my-16 flex-col-reverse md:flex-row max-w-md:hidden   ">
            <div class="  text-sm font-normal   md:flex-row max-w-md:hidden p-8">
              <h4 className=" text-4xl mb-12"> Hi, I'm </h4>
              <h1 className=" text-7xl">
                Moazam
                <span className="text-red-700        md:flex-row max-w-md:hidden    w-full h-auto ">
            
                  Khan
                </span>
              </h1>
              <h2 className="text-red-700 text-3xl">
                <span>{text}</span>
                <Cursor cursorStyle="|" cursorColor="#ff014f" />
              </h2>
              <p className="p-4 text-left leading-loose "></p>

              <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                  <h2 className="p-2 text-2xl font-bold text-red-900 m-4">
                    Find me in:
                  </h2>

                  <div className=" flex gap-2  justify-between h-30 w-30 animate-bounce ">
                    <a
                      href="https://web.whatsapp.com"
                      target="_blank"
                    >
                      <span className="bannerIcon text-5xl ">
                        <FaWhatsapp />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/moazam-khan-089406319/"
                      target="_blank"
                    >
                      <span className="bannerIcon text-5xl">
                        <FaLinkedinIn />
                      </span>
                    </a>
                    <a
                      href="https://github.com/Moazam-khan"
                      target="_blank"
                    >
                      <span className="bannerIcon text-5xl   background-color: blue;">
                        <FaGithub />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="  -mt-16 h-auto w-full flex-auto  lgl:w-1/4 flex-col-reverse md:flex-row max-w-md:hidden  ">
              <img src={banner} alt="banner" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Rightbanner;

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme"
import Projects from "./components/Projects"
import Contactus from "./components/Contactus"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Navbar  />

      <main className="">

        <div id="home">
          <Home />
        </div>

        <div id="Aboutme">
          <Aboutme />
        </div>

        <div id="Projects">
          <Projects />
        </div>
        
        <div id="contact">
          <  Contactus />
        </div>
        
        <div id="contact">
          <  Footer />
        </div>
        
     
     
        

      </main>

     
    </div>
  );
};

export default App;
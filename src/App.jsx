import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import ClubActivities from "./sections/ClubActivities";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative" style={{background: '#1A2B4C'}}>
      {/* Starry background effect */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)`,
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0'
      }}></div>
      
      {/* Container for proper separation */}
      <div className="flex min-h-screen relative z-10">
        {/* LEFT FIXED NAVIGATION - Separate Container */}
        <div className="fixed left-0 top-0 bottom-0 z-30" style={{width: '280px'}}>
          <Navbar active={activeSection} />
        </div>

        {/* RIGHT CONTENT AREA - Separate Container with clear boundary */}
        <main className="flex-1 min-h-screen relative z-10" style={{marginLeft: '280px', minWidth: 'calc(100% - 280px)'}}>
          <div className="max-w-7xl mx-auto px-8 py-8">
            <Home />
            <Skills />
            <Experience />
            <ClubActivities />
            <Projects />
            <Achievements />
          </div>
        </main>
      </div>
    </div>
  );
}

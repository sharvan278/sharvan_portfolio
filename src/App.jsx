import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative" style={{background: '#1A2B4C'}}>
      {/* Starry background effect */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)`,
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0'
      }}></div>

      {/* Mobile Header - Only visible on mobile */}
      <div className="mobile-header md:hidden">
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        <div className="mobile-title">Dev Portfolio</div>
        <div style={{width: '44px'}}></div> {/* Spacer for centering */}
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[9000] md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
      
      {/* Container for proper separation */}
      <div className="flex min-h-screen relative z-10">
        {/* LEFT FIXED NAVIGATION - Separate Container */}
        <Navbar active={activeSection} onLinkClick={closeMobileMenu} isOpen={mobileMenuOpen} />

        {/* RIGHT CONTENT AREA - Separate Container with clear boundary */}
        <main className="flex-1 min-h-screen relative z-10" style={{marginLeft: '280px', minWidth: 'calc(100% - 280px)'}}>
          <div className="max-w-7xl mx-auto px-8 py-8">
            <Home />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
          </div>
        </main>
      </div>
    </div>
  );
}

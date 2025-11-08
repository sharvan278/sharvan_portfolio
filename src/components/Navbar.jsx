import React from "react";

export default function Navbar({ active }) {
  const links = [
    { id: "home", label: "Talk To Me", icon: "✉" },
    { id: "skills", label: "Skills", icon: "<>" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "projects", label: "Projects", icon: "📁" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
  ];

  // Map active section for "home" to "Talk To Me"
  const getActiveClass = (linkId) => {
    if (linkId === "home" && active === "home") return true;
    return active === linkId;
  };

  return (
    <aside className="fixed top-0 left-0 w-[280px] h-full bg-[#2A3B5C]/80 backdrop-blur-md rounded-r-3xl p-6 flex flex-col overflow-y-auto z-50 border-r-2 border-white/20" style={{borderTopRightRadius: '1.5rem', borderBottomRightRadius: '1.5rem'}}>
      <h1 className="text-3xl font-bold text-center mb-6 text-white" style={{fontFamily: 'Pacifico, cursive'}}>
        Dev Portfolio
      </h1>
      
      <img
        src="/profile.jpg"
        alt="profile"
        className="rounded-full w-32 h-32 object-cover mx-auto mb-6 border-2 border-white"
      />

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 text-white ${
              getActiveClass(link.id)
                ? "bg-[#4A5B7C] text-white"
                : "hover:bg-white/5"
            }`}
          >
            <span className="text-lg">{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <div style={{flex:1}} />

      <div className="flex gap-4 justify-center pb-4">
        <a href="https://linkedin.com/in/sharvan-naraparaju" target="_blank" aria-label="LinkedIn" className="text-white text-xl">
          in
        </a>
        <a href="https://github.com/sharvan278" target="_blank" aria-label="GitHub" className="text-white text-xl">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="mailto:naraparajusharvan01@gmail.com" aria-label="Email" className="text-white text-xl">
          ✉
        </a>
        <a href="#" aria-label="Code" className="text-white text-xl">
          &lt;&gt;
        </a>
      </div>
    </aside>
  );
}
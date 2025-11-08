import React from "react";

export default function Navbar({ active }) {
  const links = [
    { id: "home", label: "Talk To Me", icon: "✉" },
    { id: "skills", label: "Skills", icon: "<>" },
    { id: "experience", label: "Experience", icon: "💼" },
    { id: "projects", label: "Projects", icon: "📁" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
  ];

  const getActiveClass = (linkId) => {
    if (linkId === "home" && active === "home") return true;
    return active === linkId;
  };

  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">Dev Portfolio</h1>

      <img
        src="/profile.jpg"
        alt="profile"
        className="profile-img"
      />

      <nav className="nav-links">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-link ${getActiveClass(link.id) ? "active" : ""}`}
          >
            <span className="icon">{link.icon}</span>
            <span className="label">{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="spacer" />

      <div className="social-links">
        <a
          href="https://linkedin.com/in/sharvan-naraparaju"
          target="_blank"
          aria-label="LinkedIn"
          className="social-icon"
        >
          in
        </a>
        <a
          href="https://github.com/sharvan278"
          target="_blank"
          aria-label="GitHub"
          className="social-icon"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.79-.26.79-.58v-2.23C5.67 21.27 4.97 19.1 4.97 19.1c-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.6 11.6 0 016.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.84 1.1.84 2.22v3.29c0 .32.19.69.8.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a
          href="mailto:naraparajusharvan01@gmail.com"
          aria-label="Email"
          className="social-icon"
        >
          ✉
        </a>
        <a href="#" aria-label="Code" className="social-icon">
          &lt;&gt;
        </a>
      </div>
    </aside>
  );
}
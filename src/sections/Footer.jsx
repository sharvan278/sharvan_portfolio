export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer-bar" role="contentinfo">
      <div className="site-footer-inner">
        <nav className="footer-links" aria-label="Social and contact links">
          <a
            href="https://www.linkedin.com/in/sharvan-naraparaju/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn"
            aria-label="Open LinkedIn (new tab)"
            title="LinkedIn"
          >
            {/* LinkedIn SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5z" fill="currentColor" opacity="0.87" transform="translate(3 4)"/>
              <rect x="2" y="8" width="4" height="12" rx="0.5" fill="currentColor" opacity="0.87" transform="translate(3 0)"/>
              <path d="M14 8c-2 0-3 1.1-3 2.9V20h4v-6.1c0-1.6.9-2.9 3-2.9s3 1.3 3 2.9V20h4v-7.5C25 9 21.5 8 18 8s-4 0-4 0z" fill="currentColor" opacity="0.87" transform="translate(-3 0)"/>
            </svg>
          </a>

          <a
            href="https://github.com/sharvan278"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn"
            aria-label="Open GitHub (new tab)"
            title="GitHub"
          >
            {/* GitHub SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.13 7.64 10.61.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.29-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.14-2.97-.11-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.14a10.6 10.6 0 012.78-.37c.94 0 1.89.13 2.78.37 2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.22 2.68.11 2.96.71.77 1.14 1.76 1.14 2.97 0 4.27-2.61 5.22-5.1 5.5.4.35.76 1.05.76 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.65.78.54C20.05 20.88 23.25 16.69 23.25 11.75 23.25 5.48 18.27.5 12 .5z" fill="currentColor"/>
            </svg>
          </a>

          <a
            href="mailto:naraparajusharvan01@gmail.com"
            className="footer-btn"
            aria-label="Send email"
            title="Email"
          >
            {/* Mail SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.5 6l8.5 6L20.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="#contact"
            className="footer-btn"
            aria-label="Open contact section"
            title="Contact"
          >
            {/* Code / brackets SVG to echo pasted image */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 7L4 12l4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 7l4 5-4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>

        <div className="footer-copy">
          <span className="text-sm text-gray-300">© {year} Naraparaju Sharvan</span>
        </div>
      </div>
    </footer>
  );
}
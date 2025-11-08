import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">Projects</h2>
      </div>

      <div className="major-project-container">
        <div className="project-card">
          <div className="project-image scroll-image">
            <img 
              src="/images/projects/grocera-thumb.jpg" 
              alt="AVAX50 Project"
            />
          </div>

          <div className="project-content">
            <div className="project-header">
              <div className="tech-badge green">N</div>
              <div className="tech-badge blue">TS</div>
              <h3 className="project-name">AVAX50</h3>
            </div>

            <p className="project-description">
              This project bridges that gap by creating a crypto token basket, similar to how 
              Nifty Fifty works for stocks, but powered by the Avalanche (AVAX) blockchain. 
              The goal is to provide a safe and accessible entry point into the world of 
              crypto for individuals who are curious but uncertain.
            </p>

            <div className="project-buttons">
              <a
                href="https://grocera-2.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                🔗 View Project
              </a>
              <a
                href="https://github.com/sharvan278/GROCERA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                📱
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="minor-projects-container">
        <div className="minor-grid">

          {/* Project 1 - AVAX50 */}
          <div className="minor-card">
            <div className="minor-top">
              <img
                src="/images/projects/avax50-thumb.png"
                alt="AVAX50"
                className="minor-image"
              />
              <div className="minor-details">
                <h4 className="minor-title">AVAX50</h4>
                <div className="tech-list">
                  <div className="tech-badge green small">N</div>
                  <div className="tech-badge blue small">TS</div>
                </div>
                <p className="minor-desc">
                  Crypto token basket built on AVAX blockchain, similar to how NIFTY50 works for stocks.
                </p>
                <div className="minor-buttons">
                  <a href="#" className="btn-small-primary">View</a>
                  <a href="#" className="btn-small-secondary">Code</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Nekoma */}
          <div className="minor-card">
            <div className="minor-top">
              <img
                src="/images/projects/nekoma-thumb.png"
                alt="Nekoma"
                className="minor-image"
              />
              <div className="minor-details">
                <h4 className="minor-title">Nekoma</h4>
                <div className="tech-list">
                  <div className="tech-badge green small">N</div>
                  <div className="tech-badge blue small">TS</div>
                  <div className="tech-badge cyan small">⚛</div>
                  <div className="tech-badge cyan-light small">∞</div>
                </div>
                <p className="minor-desc">
                  AI-powered programmable money agent platform on Base blockchain.
                </p>
                <div className="minor-buttons">
                  <a href="#" className="btn-small-primary">View</a>
                  <a href="#" className="btn-small-secondary">Code</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - LDC Website */}
          <div className="minor-card">
            <div className="minor-top">
              <img
                src="/images/projects/ldc-thumb.png"
                alt="LDC Website"
                className="minor-image"
              />
              <div className="minor-details">
                <h4 className="minor-title">LDC Website</h4>
                <div className="tech-list">
                  <div className="tech-badge green small">N</div>
                  <div className="tech-badge blue small">TS</div>
                  <div className="tech-badge cyan small">⚛</div>
                  <div className="tech-badge cyan-light small">∞</div>
                  <div className="tech-badge white small">🖥</div>
                </div>
                <p className="minor-desc">
                  Event management platform with blogs, quizzes, gallery & book review community.
                </p>
                <div className="minor-buttons">
                  <a href="#" className="btn-small-primary">View</a>
                  <a href="#" className="btn-small-secondary">Code</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 - Sakhi */}
          <div className="minor-card">
            <div className="minor-top">
              <img
                src="/images/projects/sakhi-thumb.png"
                alt="Sakhi"
                className="minor-image"
              />
              <div className="minor-details">
                <h4 className="minor-title">Sakhi</h4>
                <div className="tech-list">
                  <div className="tech-badge green small">N</div>
                  <div className="tech-badge blue small">TS</div>
                  <div className="tech-badge cyan small">⚛</div>
                </div>
                <p className="minor-desc">
                  Women safety app enabling proactive + reactive emergency actions.
                </p>
                <div className="minor-buttons">
                  <a href="#" className="btn-small-primary">View</a>
                  <a href="#" className="btn-small-secondary">Code</a>
                </div>
              </div>
            </div>
          </div>

          <div className="minor-card center">
            <div className="coming-soon">
              <div className="plus-icon">➕</div>
              <h4>More Coming Soon</h4>
              <p>Currently working on exciting new projects. Stay tuned!</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

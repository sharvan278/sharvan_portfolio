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
              alt="Grocera – AI Grocery Planner"
            />
          </div>

          <div className="project-content">
            <div className="project-header">
              <div className="tech-badge green">
                <i className="devicon-python-plain" style={{ fontSize: '18px' }}></i>
              </div>
              <div className="tech-badge blue">
                <span style={{ fontSize: '18px' }}>🧠</span>
              </div>
              <div className="tech-badge cyan">ST</div>
              <h3 className="project-name">Grocera — AI Grocery Planner</h3>
            </div>

            <div className="project-description">
              <ul className="list-disc ml-6 space-y-1">
                <li>Engineered ML-powered grocery optimization system reducing waste by <strong>27%</strong> using demand forecasting and smart alerts.</li>
                <li>Trained Random Forest &amp; XGBoost models achieving <strong>92%</strong> forecasting accuracy with feature engineering and hyperparameter tuning.</li>
                <li>Built interactive Streamlit UI enabling real-time tracking, charts, and purchase insights for 100+ user simulations.</li>
              </ul>
            </div>

            <div className="project-buttons">
              <a
                href="https://grocera-2.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                🔗 View App
              </a>
              <a
                href="https://github.com/sharvan278/GROCERA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <i className="devicon-github-original" style={{ fontSize: '18px', marginRight: '8px' }}></i>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="minor-projects-container">
        <div className="minor-grid">

          {/* Project 1 - StayEase */}
          <div className="minor-card">
            <div className="minor-top">
              <img
                src="/images/projects/stayease-thumb.png"
                alt="StayEase"
                className="minor-image"
              />
              <div className="minor-details">
                <h4 className="minor-title">StayEase — Full-Stack Property Booking Platform</h4>
                <div className="tech-list">
                  <div className="tech-badge green small">
                    <i className="devicon-mongodb-plain"></i>
                  </div>
                  <div className="tech-badge gray small">EX</div>
                  <div className="tech-badge cyan small">⚛️</div>
                  <div className="tech-badge green small">�</div>
                </div>
                <p className="minor-desc">
                  • Developed scalable Airbnb-style platform supporting <strong>250+ listings</strong> with secure logins, maps, and reviews.<br/>
                  • Improved backend throughput by <strong>35%</strong> via optimized API queries, caching, and load-aware DB structure.
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

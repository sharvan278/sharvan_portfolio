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
            <video 
              src="/images/projects/demo_video.mp4" 
              alt="Grocera – AI Grocery Planner"
              controls
              autoPlay
              muted
              loop
            />
          </div>

          <div className="project-content">
            <div className="project-header">
              <div className="tech-badge green" title="Python">
                <i className="devicon-python-plain" style={{ fontSize: '24px' }}></i>
              </div>
              <div className="tech-badge blue" title="TensorFlow">
                <i className="devicon-tensorflow-original" style={{ fontSize: '24px' }}></i>
              </div>
              <div className="tech-badge cyan" title="Streamlit">
                <i className="devicon-streamlit-plain" style={{ fontSize: '24px' }}></i>
              </div>
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
                src="/images/projects/stayease-thumb.jpg"
                alt="StayEase"
                className="minor-image"
              />
              <div className="minor-details">
                <h4 className="minor-title">StayEase — Full-Stack Property Booking Platform</h4>
                <div className="tech-list">
                  <div className="tech-badge green small" title="MongoDB">
                    <i className="devicon-mongodb-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge gray small" title="Express.js">
                    <i className="devicon-express-original" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge cyan small" title="React">
                    <i className="devicon-react-original" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge green small" title="Node.js">
                    <i className="devicon-nodejs-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>
                <p className="minor-desc">
                  • Developed scalable Airbnb-style platform supporting <strong>250+ listings</strong> with secure logins, maps, and reviews.<br/>
                  • Improved backend throughput by <strong>35%</strong> via optimized API queries, caching, and load-aware DB structure.
                </p>
                <div className="minor-buttons">
                  <a href="https://github.com/sharvan278/Major_Project" target="_blank" rel="noopener noreferrer" className="btn-small-primary">View</a>
                  <a href="https://github.com/sharvan278/Major_Project" target="_blank" rel="noopener noreferrer" className="btn-small-secondary">Code</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Bharat Herald Business Analytics */}
          <div className="minor-card">
            <div className="minor-top">
              <img
                src="/images/projects/rpc-17.png"
                alt="Bharat Herald Business Analytics"
                className="minor-image"
              />
              <div className="minor-details">
                <h4 className="minor-title">Bharat Herald Business Analytics</h4>
                <div className="tech-list">
                  <div className="tech-badge blue small" title="MySQL">
                    <i className="devicon-mysql-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge green small" title="Python">
                    <i className="devicon-python-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge orange small" title="Power BI">
                    <i className="devicon-azure-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>
                <p className="minor-desc">
                  Data-driven business analytics for Bharat Herald covering 2019-2024, analyzing print circulation, advertising revenue, and digital transformation readiness across 10 Indian cities.
                </p>
                <div className="minor-buttons">
                  <a href="https://github.com/sharvan278/code_basics_rpc17" target="_blank" rel="noopener noreferrer" className="btn-small-primary">Code</a>
                  <a href="https://github.com/sharvan278/code_basics_rpc17" target="_blank" rel="noopener noreferrer" className="btn-small-secondary">Details</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Air Purifier Market Fit Analysis */}
          <div className="minor-card">
            <div className="minor-top">
              <img
                src="/images/projects/aqi-thumb.png"
                alt="Air Purifier Market Fit Analysis"
                className="minor-image"
              />
              <div className="minor-details">
                <h4 className="minor-title">Air Purifier Market Fit Analysis</h4>
                <div className="tech-list">
                  <div className="tech-badge orange small" title="Jupyter Notebook">
                    <i className="devicon-jupyter-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge green small" title="Python">
                    <i className="devicon-python-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge cyan small" title="Streamlit">
                    <i className="devicon-streamlit-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge blue small" title="Power BI">
                    <i className="devicon-azure-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>
                <p className="minor-desc">
                  Product-market fit analysis leveraging AQI, health, and behavioral datasets to identify high-potential launch cities and essential features through interactive Streamlit dashboard.
                </p>
                <div className="minor-buttons">
                  <a href="https://github.com/sharvan278/Air_Purifier_Market_Fit_Analysis" target="_blank" rel="noopener noreferrer" className="btn-small-primary">View</a>
                  <a href="https://github.com/sharvan278/Air_Purifier_Market_Fit_Analysis" target="_blank" rel="noopener noreferrer" className="btn-small-secondary">Code</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 - Memory Master */}
          <div className="minor-card">
            <div className="minor-top">
              <img
                src="/images/projects/memory-thumb.png"
                alt="Memory Master"
                className="minor-image"
              />
              <div className="minor-details">
                <h4 className="minor-title">Memory Master — Interactive Memory Game</h4>
                <div className="tech-list">
                  <div className="tech-badge orange small" title="HTML5">
                    <i className="devicon-html5-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge blue small" title="CSS3">
                    <i className="devicon-css3-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge yellow small" title="JavaScript">
                    <i className="devicon-javascript-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                  <div className="tech-badge purple small" title="Bootstrap">
                    <i className="devicon-bootstrap-plain" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>
                <p className="minor-desc">
                  Interactive memory game with multiple modes (numbers, fruits, programming, colors) featuring timed challenges, score tracking, and responsive UI built with HTML/CSS/JavaScript.
                </p>
                <div className="minor-buttons">
                  <a href="https://lnkd.in/gqrVCsuV" target="_blank" rel="noopener noreferrer" className="btn-small-primary">View</a>
                  <a href="https://lnkd.in/gdvtxK8m" target="_blank" rel="noopener noreferrer" className="btn-small-secondary">Code</a>
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

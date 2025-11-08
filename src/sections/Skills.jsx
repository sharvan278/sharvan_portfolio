
export default function Skills() {
  return (
    <section id="skills">
      <div className="w-full">
        <div className="mb-16 text-center">
          <h2>
            Technical Skills
          </h2>
        </div>

        <div className="grid">
          {/* Programming Languages */}
          <div className="skill-card">
            <h3 className="skill-title">Programming Languages</h3>
            <div className="skill-grid">
              <div className="skill-item">
                <div className="skill-icon bg-yellow">JS</div>
                <span className="skill-label">JavaScript</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-blue">🐍</div>
                <span className="skill-label">Python</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-purple">K</div>
                <span className="skill-label">Kotlin</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-orange">☕</div>
                <span className="skill-label">Java</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-gray">C</div>
                <span className="skill-label">C</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-blue">TS</div>
                <span className="skill-label">TypeScript</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-cyan">🐹</div>
                <span className="skill-label">Go</span>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="skill-card">
            <h3 className="skill-title">Frameworks</h3>
            <div className="skill-grid">
              <div className="skill-item">
                <div className="skill-icon bg-gray">EX</div>
                <span className="skill-label">Express</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-black">N</div>
                <span className="skill-label">Next.js</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-gray">🌶️</div>
                <span className="skill-label">Flask</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-cyan">⚛️</div>
                <span className="skill-label">React</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-green">📗</div>
                <span className="skill-label">Node</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-purple">B</div>
                <span className="skill-label">Bootstrap</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-cyan">🎨</div>
                <span className="skill-label">Tailwind</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <h3 className="skill-title">Tools</h3>
            <div className="skill-grid">
              <div className="skill-item">
                <div className="skill-icon bg-orange">🔥</div>
                <span className="skill-label">Firebase</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-blue">🐘</div>
                <span className="skill-label">PostgreSQL</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-green">🍃</div>
                <span className="skill-label">MongoDB</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-orange">☁️</div>
                <span className="skill-label">Cloudflare</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-orange">git</div>
                <span className="skill-label">Git</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-blue">🐳</div>
                <span className="skill-label">Docker</span>
              </div>
              <div className="skill-item">
                <div className="skill-icon bg-blue">☸️</div>
                <span className="skill-label">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <h2>Internship Experience</h2>

      <div className="max-w-6xl mx-auto">

        {/* -------- Model N Experience -------- */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-logo">
              <img src="/images/modeln-logo.jpeg" alt="Model N" />
            </div>

            <div className="company-details">
              <h3>Model N</h3>
              <p><strong>Life Sciences &amp; Product Dev Intern</strong></p>
              <p>Hyderabad, India</p>
              <p>Jul 2025 – Dec 2025</p>
              <ul>
                <li>
                  Automated CPI-U and T-Bill update pipelines using Python and AWS S3, improving Medicaid URA data
                  refresh performance and reliability.
                </li>
                <li>
                  Built a GenAI Medicaid intelligence engine with LangGraph + AWS Bedrock achieving <strong>95% SQL accuracy</strong>,
                  <strong>+68% parsing reliability</strong>, and <strong>43.5% workflow complexity reduction</strong> across 50+ Oracle tables &amp; 200+ NDC drug entities.
                </li>
                <li>
                  Architected FastAPI microservices (async I/O, caching, schema-aware SQL, audit logging) powering multi-million-dollar
                  URA validation workflows under HITL governance.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-images">
            <img src="/images/experience/modeln-3.jpg" alt="Offer Letter" />
            <img src="/images/experience/modeln-1.jpg" alt="Recognition" />
            <img src="/images/experience/modeln-2.jpg" alt="Team" />
          </div>
        </div>

        {/* -------- Innomatics Research Labs Experience -------- */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-logo">
              <img src="/images/experience/innomatics-1.jpg" alt="Innomatics Research Labs logo" />
            </div>

            <div className="company-details">
              <h3>Innomatics Research Labs</h3>
              <p><strong>Full Stack Developer Intern</strong></p>
              <p>Hyderabad, India</p>
              <p>Jan 2025 – Mar 2025</p>
              <ul>
                <li>
                  Developed full-stack billing and booking systems using MERN with secure authentication and
                  role-based access control.
                </li>
                <li>
                  Optimized backend API &amp; database performance achieving <strong>30% faster response time</strong> and improved
                  system scalability.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
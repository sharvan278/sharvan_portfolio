export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Pacifico, cursive'}}>
          Internship Experience
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Model N Experience */}
        <div className="experience-container">
          <div className="experience-header">
            <div className="company-logo-circle">
              <img src="/images/modeln-logo.png" alt="Model N" />
            </div>
            
            <div className="company-details">
              <h3>Model N</h3>
              <p>Hyderabad, India</p>
              <p style={{fontSize: '0.9rem', marginTop: '0.25rem'}}>July 2025 - Dec 2025</p>
              
              <ul className="experience-points">
                <li>→ Automated the Transfer of Information (TOI) content creation process by leveraging work record data and code change details specific to each product/service and release version.</li>
                <li>→ Implemented a multi-agent workflow that simultaneously auto-generates 14 structured content sections, with a scalable architecture that supports seamless integration of new content sections.</li>
              </ul>
            </div>
          </div>

          <div className="experience-images">
            <img src="/images/experience/modeln-3.jpg" alt="Certificate" />
            <img src="/images/experience/modeln-1.jpg" alt="Recognition" />
            <img src="/images/experience/modeln-2.jpg" alt="Team" />
          </div>
        </div>

      </div>
    </section>
  );
}
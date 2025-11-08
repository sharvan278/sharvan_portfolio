export default function Experience() {
  return (
    <section id="experience">
      <h2>Internship Experience</h2>

      <div className="max-w-6xl mx-auto">

        {/* -------- Model N Experience -------- */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-logo">
              <img src="/images/modeln-logo.png" alt="Model N" />
            </div>

            <div className="company-details">
              <h3>Model N</h3>
              <p>Hyderabad, India</p>
              <p>July 2025 – December 2025</p>
              <ul>
                <li>
                  → Automated the Transfer of Information (TOI) content creation process by leveraging
                  work-record data and code change details specific to each product/service and release version.
                </li>
                <li>
                  → Implemented a multi-agent workflow that simultaneously auto-generates 14 structured
                  content sections, with a scalable architecture supporting seamless integration of
                  new content sections.
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

        {/* -------- VedaVerse Experience (Your New Section) -------- */}
        <div className="experience-card">
          <div className="experience-header">
            <div className="company-logo">
              <img src="/images/vedaverse-logo.png" alt="VedaVerse logo" />
            </div>

            <div className="company-details">
              <h3>VedaVerse</h3>
              <p>Remote</p>
              <p>July 2024 – October 2025</p>
              <ul>
                <li>
                  → Built an SEO-optimized website using NextJS and a mobile application using
                  React Native for the startup.
                </li>
                <li>
                  → Spearheaded the design of their open-source project <strong>"Chatsphere"</strong>,
                  enabling users to chat with multiple LLMs while sharing the same context without
                  switching chats.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-images vedaverse-images">
            <img src="/images/experience/vedaverse-chatsphere.png" alt="Chatsphere UI" />
            <img src="/images/experience/vedaverse-hackathon.png" alt="Hackathon poster" />
          </div>
        </div>

      </div>
    </section>
  );
}
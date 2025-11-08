export default function Achievements() {
  const achievements = [
    {
      title: "Google Solution Challenge - Feb 2025",
      description: "Won 1st place among 50+ participants for developing Sakthi, a women's safety application with integrated real-time location tracking, emergency alerts, and AI-driven threat assessment for enhanced security"
    },
    {
      title: "National-level Ideathon - Mar 2024", 
      description: "Secured 5th place out of 100+ teams with an innovative prototype which acted as a blueprint for enhancing the college transport system."
    },
    {
      title: "Ciencia Webathon - Mar 2024",
      description: "Won 3rd place in a webathon conducted during ciencia with our project- Cobalt which aims in helping developers while contributing to open source."
    },
    {
      title: "Bit-N-Build Hackathon - Feb 2024",
      description: "Led a team of 4 and achieved 1st place out of 200+ teams, winning the Hackathon with our project CodeCraft which helped in increasing collaboration between students while making software projects."
    },
    {
      title: "GreenBiz Hackathon - Nov 2023",
      description: "Placed at Top-12 out of 250+ teams with an Android app for waste segregation and collection, facilitating community events on environmental sustainability."
    }
  ];

  return (
    <section id="achievements">
      <h2>Achievements</h2>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="flex items-start gap-4">
              <div className="achievement-icon">🏆</div>

              <div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-desc">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function Certifications() {
  const certifications = [
    {
      title: "Introduction to MongoDB (For Students) - Jan 2025",
      description: "Successfully completed Introduction to MongoDB course covering NoSQL concepts, CRUD operations, document modeling and database fundamentals."
    },
    {
      title: "AWS Academy Machine Learning Foundations - Sept 2025",
      description: "Completed 20-hour foundational course on Machine Learning concepts, supervised & unsupervised algorithms, AWS ML services, and practical implementation workflows."
    },
    {
      title: "Backend Internship - Feb–Mar 2025",
      description: "Completed backend development internship focusing on building scalable applications, APIs and server-side concepts."
    },
    {
      title: "Data Science Master Virtual Internship (EduSkills) - 2024",
      description: "Successfully completed a 10-week virtual internship gaining hands-on experience in Data Science tools, datasets, and problem-solving approaches."
    },
    {
      title: "Database Programming with PL/SQL (Oracle Academy) - Dec 2024",
      description: "Completed course on PL/SQL programming including stored procedures, triggers, cursors and database logic implementation."
    }
  ];

  return (
    <section id="achievements">
      <h2>Certifications</h2>

      <div className="achievements-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="achievement-card">
            <div className="flex items-start gap-4">
              <div className="achievement-icon">📜</div>

              <div>
                <h3 className="achievement-title">{cert.title}</h3>
                <p className="achievement-desc">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}